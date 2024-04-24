/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const subs = [];

    for (let i = 2; i < n; i += 3) {
        if (nums[i] - nums[i - 2] > k) return [];
        subs.push([nums[i - 2], nums[i - 1], nums[i]]);
    }

    return subs;
};
