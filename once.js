
/**
 * Run a given function `fn` only once
 * @param {*} fn 
 * @param {*} context 
 * @returns 
 */
function once(fn, context) {
    let result
    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments)
            fn = null
        }
        return result
    }
}