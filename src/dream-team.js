const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }
  
  let result = [];
  members.forEach(el => {
    if(typeof(el) === 'string') {
      result.push(el.split('').filter(char => char != ' ')[0].toUpperCase());
    }
  });
  return result.sort().join('');
}

module.exports = {
  createDreamTeam
};
