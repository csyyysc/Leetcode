/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {};
    for (const num of nums) map[num] = (map[num] || 0) + 1;

    const max = Math.max(...Object.values(map));

    for (const key in map) {
        if (max === map[key]) return key;
    }

    return -1;
};
