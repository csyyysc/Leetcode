/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let idx = nums.indexOf(max);
    for(let i = 0; i < nums.length; i++) {
        if(idx === i) continue;
        if(max < nums[i] * 2) return -1;
    }
    return idx;
};