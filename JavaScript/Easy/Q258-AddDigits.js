/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    const digits = num.toString().split('');

    if(digits.length > 1) {
        return addDigits(digits.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0));
    } else {
        return digits.join('');
    }
};

const addDigits = (num) => {
    if(num < 10) {
        return num;
    } else {
        return num % 9 === 0 ? 9 : num % 9;
    }
}