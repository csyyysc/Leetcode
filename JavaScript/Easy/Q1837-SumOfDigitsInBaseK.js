/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    return decimalToBase(n, k).split("").reduce((prev, cur) => +prev + +cur, 0);
};

function decimalToBase(num, base) {
    let result = "";

    while (num > 0) {
        let remainder = num % base;
        result = remainder.toString() + result;
        num = Math.floor(num / base);
    }

    return result;
}
