/**
 * @param {number} r
 * @param {number} c
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (r, c, r0, c0) {
    const buckets = [];

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            const dis = Math.abs(i - r0) + Math.abs(j - c0);
            if (buckets[dis] === undefined) buckets[dis] = [];
            buckets[dis].push([i, j]);
        }
    }

    return buckets.flat();
};
