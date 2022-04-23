const { post } = require("./post")

const key = "mJQjvTk6C5QRf5uAqMaMRZvRmDbfpl7PTx8LDhCBD6A"
const event_name = "strategysignaller"
const hostname = "maker.ifttt.com"
const path = `/trigger/${event_name}/json/with/key/${key}`

/**
 * 
 * @param {string} message 
 * @returns 
 */
async function notify(message) {
    try {
        let data = JSON.stringify({message})
        let result = await post(hostname, path, data)
        return result
    } catch (error) {
        console.error(error)
    }

}

module.exports = { notify }