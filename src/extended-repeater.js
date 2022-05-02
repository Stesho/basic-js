const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  let separator = options.separator === undefined ? '+' : String(options.separator);
  let additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator === undefined ? '|' : String(options.additionSeparator);
  let addition = options.addition === undefined ? '' : String(options.addition);

  let fullAddition = [];
  for(let i = 0; i < additionRepeatTimes; i++) {
    fullAddition.push(addition);
  }
  fullAddition = fullAddition.join(additionSeparator);

  let fullStr = [];
  for(let i = 0; i < repeatTimes; i++) {
    fullStr.push(str+fullAddition);
  }

  return fullStr.join(separator);
}

module.exports = {
  repeater
};
