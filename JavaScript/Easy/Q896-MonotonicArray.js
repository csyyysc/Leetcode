/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }
    }

    return increasing || decreasing;
};

const isMonotonic = (nums) => {
    return nums.every((v, i) => i === 0 || v <= nums[i - 1]) || nums.every((v, i) => i === 0 || v >= nums[i - 1]);
};
