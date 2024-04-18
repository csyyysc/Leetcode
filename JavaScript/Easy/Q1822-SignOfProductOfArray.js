/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    if (nums.includes(0)) return 0;
    const prods = nums.reduce((prev, cur) => prev * cur, 1);
    return signFunc(prods);
};

function signFunc(num) {
    return num > 0 ? 1 : -1;
}

function arraySign(nums) {
    return nums.reduce((a, b) => {
        if (a * b > 0) return 1;
        else if (a * b == 0) return 0;
        else return -1;
    }, 1);
}
