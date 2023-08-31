/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // Initialize an alphabets mapping array
    const alphabets = Array.from(new Array(26).fill(0)).map((_, idx) => 1 + Math.pow(2, 6) + idx);
    const alphabetCodes = [];

    while(columnNumber > 0) {
      let r = columnNumber % 26;
      let d = parseInt(columnNumber / 26);

      if(r === 0) {
        r = 26;
        d = d - 1;
      }
      alphabetCodes.push(r);
      columnNumber = d;
    }

    for(let i = 0; i < alphabetCodes.length; i++) {
        alphabetCodes[i] = alphabets[alphabetCodes[i] - 1];
    }

    return alphabetCodes.map((charCode) => String.fromCharCode(charCode)).reverse().join("");
};

/**
 * @description Reference Method1
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (n) => {
    if(n < 27) return String.fromCharCode(n + Math.pow(2, 6));
  
    let s = "";
    while(n > 0) {
        let r = n % 26;
        r = r === 0 ? 26 : r;
        s += String.fromCharCode(r + Math.pow(2,6));
        n -= r;
        n /= 26;
    }
    return s.split("").reverse().join("");
  }