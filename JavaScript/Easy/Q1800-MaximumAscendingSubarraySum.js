/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    const n = nums.length,
        sub = [],
        subs = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] < nums[i + 1]) sub.push(nums[i]);
        else {
            sub.push(nums[i]);
            subs.push([...sub]);
            sub.length = 0;
        }
    }

    return Math.max(...subs.map((sub) => sub.reduce((sum, cur) => sum + cur, 0)));
};
