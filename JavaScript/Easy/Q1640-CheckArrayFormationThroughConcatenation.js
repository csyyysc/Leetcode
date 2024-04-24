/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
    let ans = [];
    const map = new Map();

    for (const p of pieces) map.set(p[0], p);

    for (const n of arr) {
        if (map.has(n)) {
            ans = ans.concat(map.get(n));
        }
    }

    return JSON.stringify(ans) === JSON.stringify(arr);
};
