/**
 * forEach in reverse to walk backward through an array
 * `array.forEachRev(element => ())`
 */
Object.defineProperty(Array.prototype, 'forEachRev', {
  value: function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
      element = this[i]
      callback(element, i)
    }
  }
})

/**
* find the first occurance of `int` in array
*/
Object.defineProperty(Array.prototype, 'findint', {
  value: function (value) {
    let found = false
    for (let i = 0; i < this.length; i++) {
      element = this[i]
      if (element === value) {
        found = element
        break
      }
    }
    return found
  }
})

/**
 * Get the maximum value of an array of integers
 * @param {*} array 
 * @returns 
 */
Array.max = function (array) {
  return Math.max.apply(Math, array)
}

/**
* 
* @param {array} array of objects with a key holding a numerical value
* @param {string} key of value to find maximum of
* @returns max value of objects
*/
Array.maxObject = function (array, key) {
  return Math.max.apply(Math, array.map(function (o) { return o[key]; }))
}

/**
* 
* @param {array} array of objects with a key holding a numerical value
* @param {string} key of value to find maximum of
* @returns object that contains max value
*/
Array.maxObjectValue = function (array, key) {
  let max = Array.maxObject(array, key)
  return array.find(o => o[key] === max)
}

/**
 * Remove element(s) from array
 * @returns array
 */
Array.prototype.remove = function () {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L]
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1)
    }
  }
  return this
}

/**
 * Get the average of an array of integers.
 */
Array.prototype.average = function () { return this.reduce((a, b) => a + b) / this.length }

/**
 * Randomly Choose an item in `array`
 * @param {*} array 
 * @returns 
 */
Array.choice = function (array) {
  return array[Math.floor(Math.random() * array.length)]
}