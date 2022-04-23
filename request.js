const https = require('https')

function request(query) {
    return new Promise((resolve, reject) => {
        try {
            const req = https.get(query.toString('utf-8'), res => res.on('data', data => resolve(JSON.parse(data.toString('utf-8')))))
        }
        catch (error) { reject(error) }
    })
}

module.exports = { request }