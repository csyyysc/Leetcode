/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    if (JSON.stringify(sorted) === JSON.stringify(nums)) return true;

    const n = nums.length;
    const rotated = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated.push(nums[(i + j) % n]);
        }
        if (JSON.stringify(rotated) === JSON.stringify(sorted)) return true;
        rotated.length = 0;
    }

    return false;
};
