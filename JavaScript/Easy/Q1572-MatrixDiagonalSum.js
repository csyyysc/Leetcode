/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    const n = mat.length;
    const diagonal = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) diagonal.push(mat[i][j]);
            if (i + j === n - 1 && i !== j) diagonal.push(mat[i][j]);
        }
    }

    return diagonal.reduce((sum, cur) => sum + cur, 0);
};
