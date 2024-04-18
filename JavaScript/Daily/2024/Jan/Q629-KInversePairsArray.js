/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
    const M = 1e9 + 7;
    const dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        let val = 0;
        for (let j = 0; j <= k; j++) {
            val += dp[i - 1][j];

            if (j >= i) val -= dp[i - 1][j - i];
            if (val < 0) val += M;

            val %= M;
            dp[i][j] = val;
        }
    }

    return dp[n][k];
};

// const kInversePairs = (n, k) => {
//     const M = 1e9 + 7;
//     let dp = new Array(k + 1).fill(0);
//     dp[0] = 1;

//     for (let i = 2; i <= n; i++) {
//         for (let j = 1; j <= k; j++) {
//             dp[j] = (dp[j] + dp[j - 1]) % M;
//         }
//         for (let j = k; j >= i; j--) {
//             dp[j] = (dp[j] - dp[j - 1] + M) % M;
//         }
//     }
//     return dp[k];
// }
