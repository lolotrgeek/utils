/**
 * What does `b` have that `a` doesn't have. (asymetrical)
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * @source https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
 */
const difference = (a, b) => b.filter(x => !a.includes(x))

