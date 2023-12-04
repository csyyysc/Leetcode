/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandParameter = function(grid) {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(!grid[row][col]) continue;
            perimeter += 4;

            if(row > 0 && grid[row - 1][col]) perimeter--; // Top
            if(col > 0 && grid[row][col - 1]) perimeter--; // Right
            if(row < rows - 1 && grid[row + 1][col]) perimeter--; // Below
            if(col < cols - 1 && grid[row][col + 1]) perimeter--; // Left
        }
    }
    return perimeter;
}