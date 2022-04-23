const https = require('https')

/**
 * 
 * @param {string} hostname 
 * @param {string} path 
 * @param {string} data json
 * @returns 
 */
function post(hostname, path, data) {
    return new Promise((resolve, reject) => {
        try {
            const options = {
                hostname: hostname,
                port: 443,
                path: path,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                  }
            }
            const req = https.request(options, res => res.on('data', d => d))
            req.on('error', error => reject(error))            
            req.write(data)
            req.end()
            resolve(true)
        }
        catch (error) { reject(error) }
    })
}

module.exports = { post }