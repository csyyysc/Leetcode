/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    const map = {};

    function getDigits(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    for (let i = lowLimit; i <= highLimit; i++) {
        const figure = getDigits(i);
        map[figure] = (map[figure] || 0) + 1;
    }

    return Math.max(...Object.values(map));
};
