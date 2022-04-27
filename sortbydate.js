 /**
  * sorts objects in `array` from oldest to newest date value
  * @param {*} array 
  * @returns 
  */
  const sortByDate = array => activities.sort((a, b) => b.date - a.date)