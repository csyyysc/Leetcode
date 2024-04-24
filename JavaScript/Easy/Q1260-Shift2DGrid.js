/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    const m = grid[0].length;
    grid = grid.flat();

    let shift = 0;
    const matrix = [];
    while (shift < k) {
        const last = grid.pop();
        grid.unshift(last);
        shift++;
    }

    let i = 0;
    while (i < grid.length) {
        matrix.push(grid.slice(i, i + m));
        i += m;
    }

    return matrix;
};
