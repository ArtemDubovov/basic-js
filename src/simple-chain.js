const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let ceil = `( ${value} )`;
    this.chain.push(ceil);
    return chainMaker;
  },
  removeLink(position) {
    if(typeof position != 'number' || Math.trunc(position) != position || position < 1 || position > this.chain.length){
      this.chain = [];
      throw new Error ("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1,1);
    return chainMaker;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let lengthChain = this.chain.length;
    let arr = [];
    let wrap = '';
    for(let i = 0; i < lengthChain; i++){
      if(lengthChain == 1){
        let res = this.chain[0];
        this.chain = [];
        return res;
      } else if(i > 0){
        wrap = '~~';
      }
      arr.push(wrap + this.chain[i]);
    }
    this.chain = [];
    return arr.join('');
  }
};

module.exports = {
  chainMaker
};
