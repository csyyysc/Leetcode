/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * @TimeComplexity O(n^2)
 */
const twoSum = function (nums, target) {
    let leftIdx = 0;
    let rightIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                leftIdx = i;
                rightIdx = j;
            }
        }
    }
    return [leftIdx, rightIdx];
};

console.log(twoSum([3, 2, 4], 6));

/**
 * @TimeComplexity O(n)
 */
const twoSumHash = (nums, target) => {
    const hashObj = {};
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let cmpt = target - value;
        /**
         * @desc Store value as key and its index
         */
        if (cmpt in hashObj && hashObj[cmpt] !== i) {
            return [i, hashObj[cmpt]];
        }
        hashObj[value] = i;
    }
};

console.log(twoSumHash([3, 2, 4], 6));
console.log(twoSumHash([3, 3], 6));
console.log(twoSumHash([3, 1, 2, 6, 7, 3], 6));
