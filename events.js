// Wrapper for events so we can create an API that allows us to swap in microservice architectures

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()


/**
 * 
 * @param {string} channel 
 * @param {*} message 
 */
function send(channel, message) {
    eventEmitter.emit(channel, message)
}

/**
 * 
 * @param {string} channel  name of channel to listen to
 * @param {function} listener handle incoming messages
 */
function listen(channel, listener) {
    eventEmitter.on(channel, listener)
}

function test_events() {
    listen("test", console.log)
    send("test", "pass")

}

module.exports = {send, listen}