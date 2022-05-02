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
  index = 1;
  let flag = false;
  let newStr = '';
  let prev = str[0];
  for(let i = 1; i < str.length; i++){
    if(str[i] == prev && i != str.length - 1){
      index++;
    } else if(str[i] == prev && i == str.length - 1){
      index++;
      newStr += index + prev;
      break;
    }
     else{
      newStr += index + prev;
      prev = str[i];
      index = 1;
    }

    if(i == str.length - 1){
      newStr += str[i];
    }
  }
  console.debug(newStr);
  return newStr.replace(/1/g,'');
}



module.exports = {
  encodeLine
};
