/**
 * Attempts to run a function `func`, any arguments after `func` are passed to `func`
 * @param {function} func 
 * @returns 
 */
async function attempt(func) {
    if (typeof func !== 'function') return handleError("Cannot attempt.", func)
    let args = [...arguments].slice(1)
    let result = await func(...args)
    if (result.code) return handleError(`Could not run ${func.name}`, result)
    return result
}

module.exports = { attempt }