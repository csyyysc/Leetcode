/*/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    const head = nums.shift();
    nums = nums.sort((a, b) => a - b);
    return head + nums.slice(0, 2).reduce((sum, cur) => sum + cur, 0);
};
