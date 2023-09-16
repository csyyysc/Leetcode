/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    const m = new Map();

    for(const n of nums) {
        if(n < k) {
            if(m.get(k - n)) m.set(k - n, m.get(k - n) - 1), count++;
            else m.set(n, (m.get(n) || 0) + 1)
        }
    }
    return count;
};