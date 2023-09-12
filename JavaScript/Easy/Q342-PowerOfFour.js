/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    const e = (Math.log(n) / Math.log(4)).toFixed(10);
    return (e % 1 === 0) ? true : false;
};

/**
 * @note Reference Method1
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => n > 0 && Math.log2(n) % 2 === 0;