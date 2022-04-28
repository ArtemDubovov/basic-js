const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let wrapper = [];
  let flag = false;
  for(let i = 0; i < arr.length; i++){
    if(flag){
      flag = !flag;
      wrapper.push('deleted element');
      continue;
    }
    console.log(arr[i]);
    if(arr[i] == '--double-next'){
      if(i != arr.length - 1){
        wrapper.push(arr[i + 1]);
      } else{
        wrapper.push('deleted element');
      }
    } else if(arr[i] == '--discard-prev' && i != arr.length){
      wrapper[i - 1] = 'deleted element';
      continue;
    } else if(arr[i] == '--discard-next'){
      flag = !flag;
      wrapper.push('deleted element');
      continue;
    } else if(arr[i] == '--double-prev'){
      if(i != 0){
        wrapper.push(wrapper[i - 1]);
      } else{
        wrapper.push('deleted element');
      }
    } else{
      wrapper.push(arr[i]);
    }
  }
  return wrapper.filter((el) => el != 'deleted element');
}

module.exports = {
  transform
};
