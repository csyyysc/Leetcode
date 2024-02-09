/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    const shuffle = [];
    
    for (let i = 0; i < n; i++) {
        shuffle.push(nums[i]);
        shuffle.push(nums[i + n]);
    }

    return shuffle;
};