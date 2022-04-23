function isURL(str) {
    if (typeof str !== 'string') return false
    else if (str.indexOf('localhost') > -1 || str.indexOf('127.0.0.1') > -1) return false
    else if (str.indexOf('http://') > -1 || str.indexOf('https://') > -1) return true
    else return false
}