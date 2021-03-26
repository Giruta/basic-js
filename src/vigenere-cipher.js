const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
    this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
      'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  }
  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let resultStr = '';

    if (typeof str !== 'string' || typeof key !== 'string' || str === '' || key === '') {
      throw new Error('Add valid parameters');
    }
    // console.log('key1 = ', key);
    // console.log('str = ', str);
    key = key.repeat(Math.ceil(str.length / key.length)).split('');

    for (let i = 0, j = 0; i < str.length; i++) {
      const rowIndex = this.letters.indexOf(str[i]);//letters
      const columnIndex = this.letters.indexOf(key[i - j]);//key

      if (rowIndex === -1) {
        resultStr += str[i];
        j++
        continue;
      }

      resultStr += this.letters[(rowIndex + columnIndex) % this.letters.length];
      // console.log('resultStr = ', resultStr);
    }

    if (this.direct === false) {
      resultStr = resultStr.split('').reverse('').join('');
    }
    // console.log('resultStr1 = ', resultStr);
    return resultStr;
  }


  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let resultStr = '';

    if (typeof str !== 'string' || typeof key !== 'string' || str === '' || key === '') {
      throw new Error('Add valid parameters');
    }

    key = key.repeat(Math.ceil(str.length / key.length)).split('');

    for (let i = 0, j = 0; i < str.length; i++) {
      const rowIndex = this.letters.indexOf(str[i]);
      const columnIndex = this.letters.indexOf(key[i - j]);

      if (rowIndex === -1) {
        resultStr += str[i];
        j++
        continue;
      }

      resultStr += this.letters[(this.letters.length + (rowIndex - columnIndex)) % this.letters.length];
    }

    if (this.direct === false) {
      resultStr = resultStr.split('').reverse('').join('');
    }

    return resultStr;
  }
}

module.exports = VigenereCipheringMachine;
