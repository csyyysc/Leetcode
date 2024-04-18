/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let lsum = 0, rsum = 0;

    nums.forEach((num) => rsum += num);
  
    for(let i = 0; i < nums.length; i++) {
        rsum -= nums[i];
        if(lsum === rsum) return i;
        lsum += nums[i];
    }
    return -1;
};