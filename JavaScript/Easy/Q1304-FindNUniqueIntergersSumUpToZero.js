/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let i = 1;
    const nums = [];

    if (n % 2 === 0) {
        while (n !== nums.length) {
            nums.push(i, -i);
            i++;
        }
    } else {
        while (n !== nums.length + 1) {
            nums.push(i, -i);
            i++;
        }
        nums.push(0);
    }

    return nums;
};
