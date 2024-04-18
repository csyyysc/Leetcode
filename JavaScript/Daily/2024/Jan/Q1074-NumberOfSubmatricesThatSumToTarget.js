/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
    let total = 0;
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        const prefixSums = new Array(n).fill(0);

        for (let j = i; j < m; j++) {
            for (let k = 0; k < n; k++) {
                prefixSums[k] += matrix[j][k];
            }

            const seen = new Map();
            seen.set(0, 1);

            let currSum = 0;
            for (let k = 0; k < n; k++) {
                currSum += prefixSums[k];
                total += seen.get(currSum - target) || 0;
                seen.set(currSum, (seen.get(currSum) || 0) + 1);
            }
        }
    }

    return total;
};
