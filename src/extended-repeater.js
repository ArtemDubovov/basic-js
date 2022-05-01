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
 * => 'STRING PLUS 00 PLUS 00 PLUS **STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let sep = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  let addSep = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';
  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  //console.debug(sep, addSep, addition);
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let repeatTimes = options.repeatTimes || 1;
  let text  = String(str);
  let substring ;
  let string ;
  let res = '';
  //console.debug(text, sep, addSep, addition, additionRepeatTimes, repeatTimes);
  for(let i = 0; i < repeatTimes; i++){
    let string = '';
    let substr = '';
    for(let j = 0; j < additionRepeatTimes; j++){
      if(j == additionRepeatTimes - 1){
        substr += addition;
      } else {
        substr += addition + addSep;
      }
      
    }
    if(i != 0){
      string += sep + text + substr ;
    } else {
      string += text + substr;
    }
    res += string;
    
  }
  //console.debug(res);
  return res;
}

module.exports = {
  repeater
};
