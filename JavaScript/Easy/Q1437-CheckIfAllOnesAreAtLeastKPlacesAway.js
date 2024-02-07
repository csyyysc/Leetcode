/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let pivot = 0;
    const n = nums.length;
    while (pivot <= n) {
        const one = nums.indexOf(1, pivot);
        const two = nums.indexOf(1, one + 1);
        if (two - one > k) {
            pivot++;
            continue;
        }
        if (two === -1) return true;
        else return false;
    }
};

const kLengthApart = (nums, k) => {
    let cur = k;
    for (const num of nums) {
        if (num === 0) {
            cur++;
            continue;
        }
        if (cur < k) return false;
        cur = 0;
    }
    return true;
};
