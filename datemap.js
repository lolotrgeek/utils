/**
 * map each date value in array to a new Date object
 * @param {*} array 
 * @returns 
 */
 const dateMap = array => array.map(value => {if (value.date) value.date = new Date(value.date); return value})
