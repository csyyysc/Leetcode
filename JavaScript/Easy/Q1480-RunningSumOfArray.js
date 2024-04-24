/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const sums = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i];
    }

    return sums;
};

const runningSum = (nums, sum = 0) => {
    return nums.map((num) => (sum += num));
};
