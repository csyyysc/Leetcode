/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return Math.max(...accounts.map((row) => row.reduce((sum, cur) => sum + cur, 0)));
};
