/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]) count++;
        else count = 0;
        max = Math.max(max, count);
    }
    return max;
};

const findMaxConsecutiveOnes = (nums) => Math.max(...nums.join('').split(0).map(x => x.length));