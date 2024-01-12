/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    while (k) {
        let min = Math.min(...nums);
        let index = nums.indexOf(min);
        nums[index] = -nums[index];
        k--;
    }

    return nums.reduce((sum, cur) => sum + cur, 0);
};
