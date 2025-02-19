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
  n = String(n);
  let greatest = 0;
  for(let i = 0; i < n.length; i++) {
    let num = n.slice(0, i) + n.slice(i+1, n.length);
    greatest = num > greatest ? num : greatest; 
  }
  return Number(greatest);
}

module.exports = {
  deleteDigit
};
