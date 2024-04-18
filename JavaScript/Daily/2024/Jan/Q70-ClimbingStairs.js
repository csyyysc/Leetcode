/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const climbs = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        climbs.push(climbs[i - 2] + climbs[i - 1]);
    }

    return climbs[n];
};
