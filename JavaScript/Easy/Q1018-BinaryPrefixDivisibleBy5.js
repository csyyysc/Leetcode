/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let val = 0;

    return nums.map((bit) => {
        val = val * 2 + bit;
        val %= 5; // Prevent Overflow
        return val === 0;
    });
};

const prefixesDivBy5 = (nums) => {
    let bin = 0;
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        bin = BigInt(bin) * BigInt(2) + BigInt(nums[i]);
        res[i] = bin % BigInt(5) == 0;
    }

    return res;
};
