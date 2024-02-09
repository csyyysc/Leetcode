/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    const bits = new Array(n).fill(0).map((_, i) => start + 2 * i);

    return bits.reduce((xor, val) => xor ^ val);
};
