/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const set = new Set(nums.sort((a, b) => b - a));
    if(set.size === 2) return Math.max(...set.values());
    else if(set.size === 1) return [...set.values()][0];
    else return [...set.values()][2]
};

const thirdMax = (nums) => {
    const uniqueNums = [...new Set(nums)];
    if(uniqueNums.length === 1) return uniqueNums[0]
    if(uniqueNums.length === 2) return Math.max(...uniqueNums);
    return uniqueNums.sort((a, b) => b - a)[2];
}

