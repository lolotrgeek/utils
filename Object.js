/**
 * Creates a filtered copy of an object
 * @param {object} object 
 * @param {array} allowed list of allowed keys
 * @returns 
 */
 Object.prototype.filter = function (object, allowed) {
    return Object.keys(object)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: object[key]
            }
        }, {})
}
