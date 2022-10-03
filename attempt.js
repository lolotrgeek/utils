/**
 * returns a reasoned error object
 * @param {*} reason 
 * @param {*} error 
 * @returns 
 */
 function handleError(reason, error) {
    log({reason, error })
    return { reason, error }
}

/**
 * Attempts to run a function `func`, any arguments after `func` are passed to `func`
 * @param {function} func 
 * @returns 
 */
async function attempt (func) {
    if(typeof func !== 'function') return handleError("Cannot attempt.", func)
    let args = [...arguments].slice(1)
    let result = await func(...args)
    if(result.code || result.error) return handleError(`Could not run ${func.name}`, result)
    return result
}

module.exports = { attempt }