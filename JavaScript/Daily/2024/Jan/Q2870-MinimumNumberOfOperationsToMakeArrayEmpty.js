/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let count = 0;
    const m = new Map();

    for (const num of nums) m.set(num, (m.get(num) || 0) + 1);

    for (const [_, value] of m.entries()) {
        if (value === 1) return -1;
        count += Math.floor(value / 3);
        if (value % 3 !== 0) count++;
    }

    return count;
};
