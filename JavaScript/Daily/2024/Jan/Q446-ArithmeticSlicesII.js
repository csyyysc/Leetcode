/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    const n = nums.length;
    let count = 0;
    let dp = new Array(n).fill(0).map(() => new Map());

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let cnt = dp[j].get(diff) || 0;
            count += cnt;
            dp[i].set(diff, (dp[i].get(diff) || 0) + 1 + cnt);
        }
    }

    return count;
};
