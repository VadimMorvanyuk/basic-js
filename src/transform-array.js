const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
    if(!Array.isArray(arr)){
      throw new Error("'arr' parameter must be an instance of the Array!")
    }
    let res = [...arr];
    res.forEach((item,index) => {
      if(item == '--double-next'){
        res[index] = res[index+1]
      } else if (item == '--double-prev'){
        res[index] = res[index-1]
      } else if (item == '--discard-next'){
        res[index] = undefined;
        res[index + 1] = undefined;
      } else if (item == '--discard-prev'){
        res[index] = undefined;
        res[index - 1] = undefined;
      }
    })
    return res.filter(item => item !== undefined)
  }

module.exports = {
  transform
};
