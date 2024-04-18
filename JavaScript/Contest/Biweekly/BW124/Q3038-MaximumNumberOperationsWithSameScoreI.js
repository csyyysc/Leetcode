/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
    let ops = 1;
    let prev = nums.shift() + nums.shift();
    next = 0;

    while (nums.length >= 2) {
        next = nums.shift() + nums.shift();
        if (next !== prev) break;
        ops++;
    }

    return ops;
};

const maxOperations = (nums) => {
    let i = 2;
    const score = nums[0] + nums[1];

    while (i < nums.length - 1 && nums[i] + nums[i + 1] === score) i += 2;
    return i >> 1;
};
