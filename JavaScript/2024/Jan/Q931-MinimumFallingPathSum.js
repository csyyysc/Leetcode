/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j - 1] || 10000, matrix[i - 1][j + 1] || 10000);
        }
    }

    return Math.min(...matrix[m - 1]);
};

const minFallingPathSum = (matrix) => {
    const n = matrix.length,
        m = matrix[0].length;
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let j = 0; j < m; j++) dp[0][j] = matrix[0][j];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let up = matrix[i][j] + dp[i - 1][j];

            let upLeft = matrix[i][j];
            if (j - 1 >= 0) upLeft += dp[i - 1][j - 1];
            else upLeft += 10000;

            let upRight = matrix[i][j];
            if (j + 1 < m) upRight += dp[i - 1][j + 1];
            else upRight += 10000;

            dp[i][j] = Math.min(up, upLeft, upRight);
        }
    }

    return Math.min(...dp[n - 1]);
};
