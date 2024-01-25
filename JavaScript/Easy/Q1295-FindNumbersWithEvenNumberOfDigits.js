/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    return nums.reduce((sum, cur) => (cur.toString().length % 2 === 0 ? sum + 1 : sum), 0);
};
