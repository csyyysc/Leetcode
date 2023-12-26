/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let lSum = 0;
    let rSum = nums.reduce((sum, cur) => sum + cur, 0);

    for(let i = 0; i < nums.length; i++) {
        lSum += nums[i];
        if(lSum === rSum) return i;
        rSum -= nums[i];
    }
    return -1;
};