/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const occur = {};
    for (let i = 0; i < arr.length; i++) {
        occur[arr[i]] = (occur[arr[i]] || 0) + 1;
    }

    return new Set(Object.values(occur)).size === new Set(arr).size;
};
