/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const nums = [0, 1];

    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            nums.push(nums[Math.floor(i / 2)]);
        } else {
            nums.push(nums[Math.floor(i / 2)] + nums[Math.floor(i / 2) + 1]);
        }
    }

    return Math.max(...nums);
};

const getMaximumGenerated = (n) => {
    if (n === 0) return 0;

    const nums = [0, 1];
    for (let i = 1; nums.length < n; i++) {
        nums[i * 2] = nums[i];
        nums[2 * i + 1] = nums[i + 1] + nums[i];
    }

    return Math.max(...nums);
};
