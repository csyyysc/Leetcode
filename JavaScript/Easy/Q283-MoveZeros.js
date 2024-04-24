/**
 * @description Reference Method1
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = left + 1;

    while(right <= nums.length - 1) {
        if(nums[left]) {
            left++, right++;
        } else {
            if(nums[right]) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right++;
        }
    }
};

/**
 * @description Reference Method2
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]) {
            nums[index] = nums[i];
            nums[i] = index === i ? nums[i] : 0;
            index++;
        }
    }
}