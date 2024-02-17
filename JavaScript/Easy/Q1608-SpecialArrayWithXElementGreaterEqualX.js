/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    let x = 0;
    nums.sort((a, b) => a - b);

    while (x <= Math.max(...nums)) {
        const special = nums.filter((n) => n >= x).length;
        if (special === x) return x;
        x++;
    }

    return -1;
};
