/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    function getDigits(num) {
        let digits = [];
        while (num > 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        return digits;
    }

    const digits = getDigits(n);
    let sum = digits.reduce((sum, cur) => sum + cur, 0);
    let product = digits.reduce((prod, cur) => prod * cur, 1);

    return product - sum;
};
