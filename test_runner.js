const path = require('path')
const fs = require('fs')
const { fork } = require('child_process')

const directoryPath = path.join(__dirname, '/tests/')

// failure on timeout

fs.readdir(directoryPath, (err, files) => {
    if (err) console.log(err)
    let count = 1
    files.forEach((file, i) => {
        if (file === 'utils') files.splice(i)
        console.log(directoryPath + file)
        let child = fork(directoryPath + file, { stdio: ['ignore', 'ignore', 'ignore', 'ipc'] })
        child.on('message', message => {
            if(message.name) {
                console.log(`${count}/${files.length}`, message)
                count++
            }
            else console.log(message)
        })     
    })
})

const timeout = 30000

/**
 * Takes a function to test, puts it in a separate process and sends pass/fail message to main thread.
 * @note best to call this from the test function and run it separately from the above function.
 * @param {function} test 
 */
function run_test(test) {
    if (process.send) process.send(`Starting : ${test.name}`)
    let timer = setTimeout(() => {
        process.send ? process.send({ name: test.name, result: false, reason:'Timeout' }) : console.log({name: test.name, result: false, reason:'Timeout'})
        process.send(`Ending : ${test.name}`)
        process.exit()
    }, timeout)

    /**
     * Usage: in the test, give a callback(result, reason), see sample_test
     */
    test((result, reason = 'Internal') => {
        let report = { name: test.name, result, reason }
        process.send ? process.send(report) : console.log(report)
        process.send(`Ending : ${test.name}`)
        process.exit()
    })
    process.on('message', message => {
        if (message === 'END') {
            process.send(`Ending : ${test.name}`)
            process.exit()
        }
    })
}

function sample_test(callback) {
    callback(true, "because")
}
module.exports = { run_test }