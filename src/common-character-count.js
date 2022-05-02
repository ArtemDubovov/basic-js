const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  console.debug(s1, s2);
  let arr = [];
  let index = 0;
  let first = s1.split('');
  let second = s2.split('');
  first.forEach(el => {
    if(second.includes(el)){
      let i = second.indexOf(el);
      second.splice(i,1);
      index++;
    }
  })
  return index;
}

module.exports = {
  getCommonCharacterCount
};
