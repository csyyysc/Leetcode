/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const n = nums.length;

    if (n === 1) return 0;

    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] >= nums[i + 1]) {
            sum += nums[i] - nums[i + 1] + 1;
            nums[i + 1] = nums[i] + 1;
        }
    }

    return sum;
};
