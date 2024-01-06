/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const parity = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) parity.unshift(nums[i]);
        else parity.push(nums[i]);
    }

    return parity;
};

const sortArrayByParity = (nums) => {
    let oddIdx = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            [nums[i], nums[oddIdx]] = [nums[oddIdx], nums[i]];
            oddIdx++;
        }
    }

    return nums;
}