/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var duplicateZeros = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i + 1, 0, 0);
            nums.pop();
            i += 2;
        } else i++;
    }
};
