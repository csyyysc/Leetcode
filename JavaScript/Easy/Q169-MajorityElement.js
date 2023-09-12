/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const elementTable = {};

    for(let i = 0; i < nums.length; i++) {
        nums[i] in elementTable ? elementTable[nums[i]]++: elementTable[nums[i]] = 0;
    }
    
    const mappedVals = Object.values(elementTable);
    const max = Math.max(...mappedVals);
    
    return Object.keys(elementTable).find(key => elementTable[key] === max);
};

/**
 * @description Reference Method1
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const elementTable = {};
    
    for(let i = 0; i < nums.length; i++) {
        elementTable[nums[i]] = elementTable[nums[i]] + 1 || 1;
        if(elementTable[nums[i]] > nums.length / 2) return nums[i];
    }
};