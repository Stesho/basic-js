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
function encodeLine(str) {
  let encodeStr = '';
  for(let i = 0, count = 1; i < str.length; i++) {
    if(str[i] === str[i+1]) {
      count++;
    }
    else {
      count = count > 1 ? count : '';
      encodeStr += String(count) + str[i];
      count = 1;
    }
  } 
  return encodeStr;
}

module.exports = {
  encodeLine
};
