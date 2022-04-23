function isWeb(location) {
    if (isURL(location.href)) return true
    else {
        if (location.href.indexOf('localhost') > -1) return true
        else return false
    }
}