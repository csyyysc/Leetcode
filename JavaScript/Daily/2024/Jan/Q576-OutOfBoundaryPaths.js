/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// var findPaths = function (m, n, moves, row, col) {
//     let count = 0;
//     const M = 1e9 + 7;

//     let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
//     dp[row][col] = 1;

//     for (let move = 1; move <= moves; move++) {
//         let temp = new Array(m).fill(0).map(() => new Array(n).fill(0));

//         for (let i = 0; i < m; i++)
//             for (let j = 0; j < n; j++) {
//                 if (i === m - 1) count = (count + dp[i][j]) % M; // Max Row
//                 if (j === n - 1) count = (count + dp[i][j]) % M; // Max Col
//                 if (i === 0) count = (count + dp[i][j]) % M; // Initial Row
//                 if (j === 0) count = (count + dp[i][j]) % M; // Initial Col
//                 temp[i][j] = (
//                     ((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % M +
//                     ((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) % M
//                 ) % M;
//             }
//         dp = temp;
//     }

//     return count;
// };

const findPaths = (m, n, moves, row, col) => {
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() => new Array(moves + 1).fill(-1)));

    const M = 1e9 + 7;

    function helper(moves, x, y) {
        // Base case1: if out of bounds, return 1 path
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;

        // Base case2: if no moves left, return 0 path
        if (moves <= 0) return 0;

        // Return calculated result
        if (dp[x][y][moves] !== -1) {
            return dp[x][y][moves];
        }

        let res = 0;
        res = (res + helper(moves - 1, x + 1, y)) % M;
        res = (res + helper(moves - 1, x, y - 1)) % M;
        res = (res + helper(moves - 1, x - 1, y)) % M;
        res = (res + helper(moves - 1, x, y + 1)) % M;
        dp[x][y][moves] = res;

        return res;
    }

    // Recurse from the inital postiion
    return helper(moves, row, col);
};
