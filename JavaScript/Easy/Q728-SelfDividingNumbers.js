/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const nums = [];

    for(let num = left; num <= right; num++) {
        let digits = num;
        let valid = true;

        while(digits > 0) {
            const digit = digits % 10;

            if(!digit || num % digit !== 0) {
                valid = false;
                break;
            }

            digits = Math.floor(digits / 10);
        }

        if(valid) nums.push(num);
    }
    return nums;
}