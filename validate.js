/**
 * Determines if data is valid
 * @param {*} data 
 * @returns 
 */
 function Validate(data) {
    if (typeof data === 'null' || data === null || data === 'null') return false 
    if (typeof data === 'undefined'|| data === undefined || data === 'undefined') return false
    if (typeof data === 'number' && isNaN(data)) return false
    return data
}