/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let area = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] > 0) area++;
        }
        area += Math.max(...grid[i]);
        area += Math.max(...grid.map(c => c[i]));
    }

    return area;
}