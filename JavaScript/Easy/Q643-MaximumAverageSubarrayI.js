/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let max = sum;
    for(let j = k; j < nums.length; j++) {
        sum = sum - nums[j - k] + nums[j];
        max = Math.max(max, sum);   
    }
    return max / k;
};