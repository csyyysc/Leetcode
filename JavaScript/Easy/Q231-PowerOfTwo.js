/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) {
      return false;
    } else if(n === 1) {
      return true;
    } else if(n % 2 !== 0) {
      return false;
    }

    while(n > 2) { 
      n = Math.floor(n / 2);
      if(n % 2 !== 0) return false;
    }
    return true;
};


/**
 * @description Reference Method1
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => n > 0 ? !(n & n - 1) : false;