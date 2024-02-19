/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 0 || n < 0) return false;
    if (n === 1) return true;
    if (n % 2 !== 0) return false;

    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n >> 1;
    }

    return true;
};

const isPowerOfTwo = (n) => (n > 0 ? !(n & (n - 1)) : false);
