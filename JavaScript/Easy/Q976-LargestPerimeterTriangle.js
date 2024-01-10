/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums = nums.sort((a, b) => a - b);

    let perimeter = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i],
            b = nums[i + 1],
            c = nums[i + 2];
        if (a + b > c) perimeter = a + b + c;
    }

    return perimeter;
};
