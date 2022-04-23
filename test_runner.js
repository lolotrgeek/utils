const path = require('path')
const fs = require('fs')
const { fork } = require('child_process')

const directoryPath = path.join(__dirname, '/tests/')

// failure on timeout

//** This loads all files from a directory and runs them, listens for pass/fail messages */
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
function run(test) {
    if (process.send) process.send(`Starting : ${test.name}`)
    let timer = setTimeout(() => {
        process.send ? process.send({ name: test.name, result: false, reason:'Timeout' }) : console.log({name: test.name, result: false, reason:'Timeout'})
        process.exit()
    }, timeout)

    test(result => {
        let report = { name: test.name, result, reason: 'Internal' }
        process.send ? process.send(report) : console.log(report)
        process.exit()
    })
    process.on('message', message => {
        if (message === 'END') {
            process.send(`Ending : ${test.name}`)
            process.exit()
        }
    })
}
module.exports = { run }

//////
// function Test(file) {
//     return new Promise((resolve, reject) => {
//         if (file === 'utils') resolve()
//         let child = fork(directoryPath + file, { stdio: ['ignore', 'ignore', 'ipc'] })
//         child.on('message', message => {
//             console.log(message)
//             resolve(message)
//         })
//     })
// }

// async function Iterate(files) {
//     await files.reduce(async (previous, current, index) => {
//         try {
//             await previous
//             await Test(current)
//         } catch (error) {
//             console.log(error)
//         }
//     }, Promise.resolve())    
// }

// async function Begin() {
//     return new Promise((resolve, reject) => fs.readdir(directoryPath, (err, files) => {
//         if (err) reject (err)
//         resolve( files)
//     }))
// }

// async function Run() {
//     let tests = await Begin()
//     await Iterate(tests)
// }
