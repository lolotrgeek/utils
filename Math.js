/**
 * Re-maps a number from one range to another.
 * @param  {Number} n  the incoming value to be converted
 * @param  {Number} start1 lower bound of the value's current range
 * @param  {Number} stop1  upper bound of the value's current range
 * @param  {Number} start2 lower bound of the value's target range
 * @param  {Number} stop2  upper bound of the value's target range
 * @param  {Boolean} [withinBounds] constrain the value to the newly mapped range
 * @return {Number}        remapped number
 * @returns 
 */
Math.map = function (n, start1, stop1, start2, stop2, withinBounds) {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2
    if (!withinBounds) {
        return newval
    }
    if (start2 < stop2) {
        return constrain(newval, start2, stop2)
    } else {
        return constrain(newval, stop2, start2)
    }
}

/**
* 
* Constrains a value between a minimum and maximum value.
*
* @method constrain
* @param  {Number} n    number to constrain
* @param  {Number} low  minimum limit
* @param  {Number} high maximum limit
* @return {Number}      constrained number
*/
Math.constrain = function (n, low, high) {
    return Math.max(Math.min(n, high), low)
}