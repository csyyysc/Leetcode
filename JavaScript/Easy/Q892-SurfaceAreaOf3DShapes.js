/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    let surface = 0;
    const width = grid[0].length;
    const height = grid.length;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] > 0) surface += grid[i][j] * 4 + 2;
            if (i > 0) surface -= 2 * Math.min(grid[i - 1][j], grid[i][j]);
            if (j > 0) surface -= 2 * Math.min(grid[i][j - 1], grid[i][j]);
        }
    }

    return surface;
};

const surfaceArea = (grid) => {
    let a = 0;
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) a += 2;
            if (i === 0) a += grid[i][j];
            if (j === 0) a += grid[i][j];
            if (i === n - 1) a += grid[i][j];
            if (j === n - 1) a += grid[i][j];
            if (i > 0 && grid[i - 1][j] < grid[i][j]) a += grid[i][j] - grid[i - 1][j];
            if (i < n - 1 && grid[i + 1][j] < grid[i][j]) a += grid[i][j] - grid[i + 1][j];
            if (j > 0 && grid[i][j - 1] < grid[i][j]) a += grid[i][j] - grid[i][j - 1];
            if (j < n - 1 && grid[i][j + 1] < grid[i][j]) a += grid[i][j] - grid[i][j + 1];
        }
    }

    return a;
};
