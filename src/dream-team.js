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
  if(!Array.isArray(members)) return false;
  let res = members.reduce((previousValue, currentItem, index, arr) => {
    console.log(previousValue, currentItem, index, arr);
    if(typeof currentItem == 'string' && typeof currentItem[0] == 'string'){
        return previousValue += currentItem.split(' ').join('')[0].toUpperCase();
    } else{
        return previousValue += '';
    }
  }, '').split('').sort().join('');
  if(res.length > 0){
    return res;
  }
  return false;
}

module.exports = {
  createDreamTeam
};
