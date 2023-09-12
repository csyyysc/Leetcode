/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n < 0 || (n % 3 !== 0 && n !== 1)) return false;

    while(n > 1) {
        n /= 3;
    }
    return n === 1 ? true : false;
};

/**
 * @note Reference Method1
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
    let e = (Math.log(n) / Math.log(3)).toFixed(10);
    return (e % 1 === 0) ? true : false;
};
