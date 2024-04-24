/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let parity = new Array(nums.length).fill(null);

    let even = 0,
        odd = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            parity[even] = nums[i];
            even += 2;
        }
        if (nums[i] % 2 === 1) {
            parity[odd] = nums[i];
            odd += 2;
        }
    }

    return parity;
};
