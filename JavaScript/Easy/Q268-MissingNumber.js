/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++) {
        if(!nums.includes(i)) return i;
    }
};

/**
 * @note Reference Method1 
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const arr = new Array(nums.length + 1).fill(-1);
    for(const num of nums) arr[num] = num;

    return arr.indexOf(-1);
};

/**
 * @note Reference Method2
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    let sum = nums.length;
    for(let i = 0; i < nums.length; i++) sum += i - nums[i];

    return sum;
};