/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map((num) => Math.pow(Math.abs(num), 2)).sort((a, b) => a - b);
};

const sortedSquares = (nums) => {
    const n = nums.length;
    const squares = new Array(n);

    let left = 0,
        right = n - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            squares[i] = nums[right] ** 2;
            right--;
        } else {
            squares[i] = nums[left] ** 2;
            left++;
        }
    }

    return squares;
};
