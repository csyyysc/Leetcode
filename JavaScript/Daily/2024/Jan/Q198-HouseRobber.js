/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;

    const robbed = [nums[0]],
        skipped = [0];
    for (let i = 1; i < n; i++) {
        robbed = skipped[i - 1] + nums[i];
        skipped = Math.max(robbed[i - 1], skipped[i - 1]);
    }

    return Math.max(robbed[n - 1], skipped[n - 1]);
};
