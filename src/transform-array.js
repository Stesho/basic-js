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
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        arr[i+1] = undefined;
        i++;
        continue;   
      case '--discard-prev':
        arr[i-1] === undefined ? null:newArr.pop();
        arr[i-1] = undefined;
        continue;
      case '--double-next':
        arr[i+1] === undefined ? null:newArr.push(arr[i+1]);
        continue;
      case '--double-prev':
        arr[i-1] === undefined ? null:newArr.push(arr[i-1]);
        continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {
  transform
};
