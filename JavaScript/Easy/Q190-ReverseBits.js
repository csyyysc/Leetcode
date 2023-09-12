/**
 * @description Reference Method1
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;

    for(let i = 0; i < 32; i++) {
        const bit = n & 1; // Find last bit of n
        const reversedBit = bit << (31 - i); // Shift last bit of n to the left
        result |= reversedBit; // Insert the reversed last bit of n into result
        n >>>= 1; // Drop the last bit of n
    }
    return result >>> 0; // Convert the result to an unsinged 32-bit int
};

/**
 * @description Reference Method2
 */
const reverseBits = (n) => {
    let result = 0;
    let count = 32;

    while(count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
}