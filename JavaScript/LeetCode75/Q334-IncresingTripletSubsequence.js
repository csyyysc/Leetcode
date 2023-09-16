/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNumber = Infinity;
    let secondNumber = Infinity;

    for(const num of nums) {
        if(num > secondNumber && num > firstNumber) return true;
        if(num > firstNumber) {
            secondNumber = num;
        } else {
            firstNumber = num;
        }
    }
    return false;
};