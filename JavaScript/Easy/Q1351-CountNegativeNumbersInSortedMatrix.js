/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    return grid.flat().reduce((sum, cur) => (cur < 0 ? sum + 1 : sum), 0);
};
