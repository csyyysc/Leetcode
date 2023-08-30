/**
 * @description Reference Method1
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let target = 0;
    for(let i = 0; i < nums.length; i++) {
        target = target ^ nums[i];
    }
    return target;
};

/**
 * @description Reference Method2
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev, curr) => prev ^ curr);
  }