/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr) {
    const n = arr.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let max = 0,
            sum = 0;
        for (let j = 1; j <= k && i - j >= 0; j++) {
            max = Math.max(max, arr[i - j]);
            sum = Math.max(sum, max * j + dp[i - j]);
        }
        dp[i] = sum;
    }

    return dp[n];
};
