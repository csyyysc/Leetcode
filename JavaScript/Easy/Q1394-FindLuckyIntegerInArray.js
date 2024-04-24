/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const map = {};

    for (const num of arr) map[num] = (map[num] || 0) + 1;

    let max = -Infinity;

    for (const key in map) {
        if (+key === map[key]) max = Math.max(max, key);
    }
    return max === -Infinity ? -1 : max;
};
