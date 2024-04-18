/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left, right;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if(sum === target) {
                left = i;
                right = j;
            }
        }
    }
    return [left, right];
}

const twoSum = (nums, target) => {
    const hash = {};

    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        let remain = target - val;
    
        if(remain in hash && hash[remain] !== i) {
            return [i, hash[remain]];
        }
        hash[val] = i;
    }
}