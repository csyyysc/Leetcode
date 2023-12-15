/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function(m, n, ops) {
    let minRow = m, minCol = n;

    for(const op of ops) {
        minRow = Math.min(minRow, op[0]);
        minCol = Math.min(minCol, op[1]);
    }
    return minRow * minCol;
}