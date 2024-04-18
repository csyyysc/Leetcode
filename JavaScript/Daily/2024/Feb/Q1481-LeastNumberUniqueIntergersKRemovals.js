/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const map = {};

    for (const num of arr) map[num] = (map[num] || 0) + 1;

    const values = Object.values(map).sort((a, b) => b - a);
    while (k > 0) {
        const el = values[values.length - 1];
        if (el <= k) (k -= el), values.pop();
        else break;
    }
    return values.length;
};
