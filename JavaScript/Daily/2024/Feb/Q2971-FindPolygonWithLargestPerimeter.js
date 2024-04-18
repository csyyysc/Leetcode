/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => a - b);

    const arr = [...nums];
    while (arr.length) {
        const len = arr.length;
        const sum = arr.reduce((sum, cur) => sum + cur, 0);
        const last = arr[len - 1];
        if (last < sum - last) return sum;
        else arr.splice(len - 1, len);
    }

    return -1;
};
