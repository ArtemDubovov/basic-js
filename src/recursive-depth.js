const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  maxDepth = 0
  index = 1
  calculateDepth(arr) {
    //console.debug(arr);
    //console.log(arr,this.index, this.maxDepth);
    arr.forEach((el) => {
      if(Array.isArray(el) && el.length != 0){
        this.index++;
        this.calculateDepth(el);
        this.index--;
      } else if(el.length == 0){
        this.index++;
        if(this.index > this.maxDepth){

          this.maxDepth = this.index;
          this.index--;
        } else{
          this.index--;
        }
      } else {
        if(this.index > this.maxDepth){
          this.maxDepth = this.index;
        }
      }
    })
    if(this.index == 1){
      let res = this.maxDepth;
      this.maxDepth = 0;
      return res;
    }
  }
}

module.exports = {
  DepthCalculator
};
