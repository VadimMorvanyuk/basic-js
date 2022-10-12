const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // function encodeLine(str) {
  //   let obj = {};
  //    str.split('').map(item => {
  //   obj[item] = 0;
  //   })
  //   str.split('').map(item => {
  //   if(obj.hasOwnProperty(item)){
  //   obj[item]++
  //   }
  //   })
  //   let res = Object.entries(obj);
  //   res.forEach(item => {
  //   item.reverse()
  //   })
  //   return res.join('').replace(/,/g,'').replace(/1/g,'')
  // }
}

module.exports = {
  encodeLine
};
