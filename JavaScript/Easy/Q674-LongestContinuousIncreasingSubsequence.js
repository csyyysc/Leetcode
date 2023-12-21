/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfCLIS = function (nums) {
    let len = 1,
        max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) len++;
        else len = 1;
        max = Math.max(max, len);
    }
    return max;
};
