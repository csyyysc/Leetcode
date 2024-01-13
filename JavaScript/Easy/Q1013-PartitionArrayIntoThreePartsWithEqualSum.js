/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canThreePartsEqualSum = function (nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    let sum = 0,
        count = 0;
    const avg = total / 3;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === avg) {
            count++;
            sum = 0;
        }
    }

    return count >= 3;
};
