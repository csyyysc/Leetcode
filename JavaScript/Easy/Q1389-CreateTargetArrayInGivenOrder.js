/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        arr.splice(index[i], 0, nums[i]);
    }

    return arr;
};

const createTargetArray = (nums, index) => {
    const n = nums.length;
    const ans = [];

    for (let i = 0; i < n; i++) {
        if (ans[index[i]] !== undefined) {
            ans.splice(index[i], 0, nums[i]);
        } else {
            ans[index[i]] = nums[i];
        }
    }

    return ans;
};
