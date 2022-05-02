const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let list = {}
  let arr = [];
  names.forEach(el => {
    if(list.hasOwnProperty(el)){
      list[el] += 1;
    } else if(/(\(\d\))/.test(el)){
      list[el] = 1;
    }
     else{
      list[el] = 0;
      

    }
  let add = (function (){
    if(list[el] == 0 ){
      return '';
    } else{
      if(/(\(\d\))/.test(el)){
        let value = el.replace(/(\(\d+\))/, '');
        let number = el.match(/(\(\d+\))/)[0].replace('(','').replace(')', '');
        if(list.hasOwnProperty(value) && list[value] >= 1){
          return `(${list[el]})`;
        }
        return '';
      } else{
        return `(${list[el]})`;
      }
      
    }})();
  arr.push(el + add);
  })
  return arr;
}

module.exports = {
  renameFiles
};
