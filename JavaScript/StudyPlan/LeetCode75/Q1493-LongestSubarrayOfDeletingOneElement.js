/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if(nums.length === 1) return 0;
    let count = 0;
    const arr = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
        } else {
            arr.push(count);
            count = 0;
        }
    }

    if(count > 0) {
        arr.push(count);
    }
    if(nums.length === count) return count - 1;

    let res = arr[0] + arr[1];
    for(let j = 1; j < arr.length - 1 ; j++) {
        res = Math.max(res, arr[j] + arr[j+1]);
    }
    return res;
};