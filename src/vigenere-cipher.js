const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.isReverse = type === false ? false : true;
  }

  encrypt(str, key) { 
    if(str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    str = str.split('');
    let newKey = [];

    for (let index = 0, i = 0, j = 0; index < str.length; index++) {
      if (j === key.length) {
        j = 0;
      }
      if(/[a-zA-Z]/.test(str[index])) {
        newKey[i] = key[j];
        i++;
        j++;
      }
    }

    for (let i = 0, j = 0; i < str.length; i++){
      if(/[a-zA-Z]/.test(str[i])) {
        let symbolCode = ((str[i].toUpperCase().charCodeAt(0) + newKey[j].toUpperCase().charCodeAt(0)) - 2 * 65) % 26 + 65;
        str[i] = String.fromCharCode(symbolCode);
        j++;
      }
    }
    
    return this.isReverse === true ? str.join('') : str.reverse().join('');
  }

  decrypt(str, key) {
    if(str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    str = str.split('');
    let newKey = [];

    for (let index = 0, i = 0, j = 0; index < str.length; index++) {
      if (j === key.length) {
        j = 0;
      }
      if(/[a-zA-Z]/.test(str[index])) {
        newKey[i] = key[j];
        i++;
        j++;
      }
    }

    for (let i = 0, j = 0; i < str.length; i++){
      if(/[a-zA-Z]/.test(str[i])) {
        let symbolCode = ((str[i].toUpperCase().charCodeAt(0) + 26 - newKey[j].toUpperCase().charCodeAt(0))) % 26 + 65;
        str[i] = String.fromCharCode(symbolCode);
        j++;
      }
    }

    return this.isReverse === true ? str.join('') : str.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
