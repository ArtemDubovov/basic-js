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
  constructor(reverse = true){
    this.reverse = reverse;
  }
  encrypt(text , key) {
    if(!text || !key){  
      throw new Error('Incorrect arguments!');
    }
    let cryptoKey = [];

    key.toLowerCase().split('').forEach(el => cryptoKey.push(el.charCodeAt() - 97));

    function cryptoString(str){
      let newString = '';
      let index = 0;
      return str.toLowerCase().split('').map(el => {
        let elNumber = el.charCodeAt();
        if(el.charCodeAt() > 122 || el.charCodeAt() < 97){
          return el;
        }
        if(index > cryptoKey.length - 1){
          index = 0;
        }
        if(elNumber + cryptoKey[index] > 122){
          let res = String.fromCharCode(elNumber + cryptoKey[index] - 26);
          index++;
          return res;
        } else {
          let res = String.fromCharCode(elNumber + cryptoKey[index]);
          index++;
          return res;
        }
      })
    }
    if(!this.reverse){
      return cryptoString(text).reverse().join('').toUpperCase();
    }
    return cryptoString(text).join('').toUpperCase();

  }
  decrypt(text, key) {
    if(!text || !key){  
      throw new Error('Incorrect arguments!');
    }
    let cryptoKey = [];

    key.toLowerCase().split('').forEach(el => cryptoKey.push(el.charCodeAt() - 97));

    function cryptoString(str){
      let newString = '';
      let index = 0;
      return str.toLowerCase().split('').map(el => {
        let elNumber = el.charCodeAt();

        if(el.charCodeAt() > 122 || el.charCodeAt() < 97){
          return el;
        }
        if(index > cryptoKey.length - 1){
          index = 0;
        }
        if(elNumber - cryptoKey[index] < 97){
          let res = String.fromCharCode(elNumber - cryptoKey[index] + 26);
          index++;
          return res;
        } else {
          let res = String.fromCharCode(elNumber - cryptoKey[index]);
          index++;
          return res;
        }
      })
    }
    if(!this.reverse){
      return cryptoString(text).reverse().join('').toUpperCase();
    }
    return cryptoString(text).join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
