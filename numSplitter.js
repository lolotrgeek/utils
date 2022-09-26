/**
 * Splits a number by 1 or decimal and puts each into an array until reaching 0 
 * @param {number} num 
 * @param {array} split 
 * @example input: `6.8138` output: `[ 1, 1, 1, 1, 1, 1, 0.8137999999999996 ]`
 * @test the sum of the output equals the input
 * @returns 
 */
function numSplitter(num, split = []){
    if(num < 1) {
        split.push(num)
        return split
    }
    if(num - 1 > 0) {
        split.push(1)
        return numSplitter( num - 1, split)
    } 
    return split 
}
let num = 6.8138
let test = numSplitter(num)
console.log(test, test.reduce((partialSum, a) => partialSum + a, 0) === num)