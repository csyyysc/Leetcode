/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    const map = {};

    for (const num of nums) map[num] = (map[num] || 0) + 1;

    let pairs = 0;

    for (const key in map) {
        pairs += (map[key] * (map[key] - 1)) / 2;
    }

    return pairs;
};
