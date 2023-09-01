// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
var containsDuplicate = function(nums) {
    const elementTable = {};
    for(let i = 0; i < nums.length; i++) {
       nums[i] in elementTable ? elementTable[nums[i]]++ : elementTable[nums[i]] = 1;
    }
    return Math.max(...Object.values(elementTable)) > 1 ? true : false;
};

/**
 * @description Reference Method1
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};