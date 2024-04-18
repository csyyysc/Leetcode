/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let steps = 0;
    let boundary = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            steps = steps + nums[i];
        } else {
            steps = steps - Math.abs(nums[i]);
        }
        if (steps === 0) boundary++;
    }

    return boundary;
};

const returnToBoundaryCount = (nums) => {
    let sum = 0,
        bounds = 0;

    for (const num of nums) {
        sum += num;
        if (sum === 0) bounds++;
    }

    return bounds;
};
