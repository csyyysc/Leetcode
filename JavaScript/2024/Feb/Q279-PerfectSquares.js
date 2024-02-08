/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
};

const numSquares = (n, memo = {}) => {
    if (n < 4) return n;
    if (n in memo) return memo[n];

    let ans = n;

    for (let i = 1; i ** 2 <= n; i++) {
        const sqr = i ** 2;
        ans = Math.min(ans, numSquares(n - sqr, memo));
    }

    return (memo[n] = ans + 1);
};
