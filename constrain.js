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
 let constrain = function(n, low, high) {
    return Math.max(Math.min(n, high), low);
  };