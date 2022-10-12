const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = [];
     let res = n.toString().split('');
    res.map(item => {
    arr.push(+item)
    })
    let max = Math.max(...res);
    let indexMax = arr.lastIndexOf(max);
    arr.splice(indexMax -1,1);
    return +arr.join('')
  }

module.exports = {
  deleteDigit
};
