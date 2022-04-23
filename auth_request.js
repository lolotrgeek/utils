/**
 * 
 * @param {*} keys 
 * @param {*} endpoint 
 * @param {*} parameters 
 * @param {*} method 
 * @returns 
 */
 function auth_request(keys, endpoint, parameters, method = 'GET') {
    return new Promise((resolve, reject) => {
        try {
            let timestamp = Math.floor(new Date().getTime()).toString()
            let secret = keys.secret
            let data = `${parameters ? parameters + '&' : ''}timestamp=${timestamp}`
            let signature = crypto.createHmac('sha256', secret).update(data).digest("hex")

            const options = {
                hostname: keys.url,
                port: 443,
                path: `${endpoint}?${data}&signature=${signature}`,
                method: method
            }
            // TODO: add debug global
            // console.log(keys.url + options.path) 

            const req = https.request(options, res => res.on('data', data => resolve(JSON.parse(data.toString('utf-8')))))
            req.setHeader('X-MBX-APIKEY', keys.apiKey)
            req.end()
        }
        catch (error) { reject(error) }
    })
}
