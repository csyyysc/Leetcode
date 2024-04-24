/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for(let row = 0; row < rows - 1; row++) {
        for(let col = 0; col < cols - 1; col++) {
            if(matrix[row][col] !== matrix[row + 1][col + 1]) return false;
        }
    }
    return true;
};