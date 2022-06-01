
const path = require('path')
const fs = require('fs')
const { fork } = require('child_process')

const directoryPath = path.join(__dirname, '/services/')


/**
 * Starts Each Service in a separate process.
 */
fs.readdir(directoryPath, (err, files) => {
    if (err) console.log(err)
    files.forEach((file, i) => {
        if (file === 'utils') files.splice(i)
        console.log(directoryPath + file)
        let child = fork(directoryPath + file, { stdio: ['ignore', 'ignore', 'ignore', 'ipc'] })
        child.on('message', message => console.log(message))     
    })
})



/**
 * Convert a function into a subprocess
 * @param {function} service the function to be converted
 */
 function Service(service) {
    if (process.send) process.send(`Starting : ${service.name}`)
    service()
    // let pinger = setInterval(() => process.send({ name: test.name, status: "alive" }), 1000)

    process.on('message', message => {
        if (message === 'END') {
            clearInterval(pinger)
            process.send(`Ending : ${test.name}`)
            process.exit()
        }
    })
}

module.exports = { Service }