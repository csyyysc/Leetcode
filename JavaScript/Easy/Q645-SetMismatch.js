/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    const set = new Set(nums);
    const total = n * (n + 1) / 2;

    let setSum = 0;
    set.forEach((val) => setSum += val);
    const numSum = nums.reduce((cur, prev) => cur + prev, 0);
    return [numSum - setSum, total - setSum];
}