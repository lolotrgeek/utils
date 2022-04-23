/**
 * Determine if two arrays are equal (non-sequential)
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
 const equals = (a, b) =>
 a.length === b.length &&
 a.every((v, i) => v === b[i])