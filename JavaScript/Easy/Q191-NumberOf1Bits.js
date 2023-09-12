/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    let totalBitsLen = 32;

    while(totalBitsLen--) {
        count += n & 1;
        n = n >> 1;
    }

    return count;
};

