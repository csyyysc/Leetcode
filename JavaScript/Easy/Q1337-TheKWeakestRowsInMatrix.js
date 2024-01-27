/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let weakest = new Array(k).fill(null);
    let soldiers = mat.map((row) => row.reduce((sum, cur) => (cur === 1 ? sum + cur : sum)), 0);
    const sorted = [...soldiers].sort((a, b) => a - b);

    for (let i = 0; i < k; i++) {
        weakest[i] = soldiers.indexOf(sorted[i]);
        soldiers[weakest[i]] = null;
    }

    return weakest;
};
