/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    const negs = nums.filter((n) => n < 0).reverse();
    const pos = nums.filter((n) => n >= 0).reverse();
    const arr = [];

    while (pos.length || negs.length) {
        const p = pos.pop();
        const n = negs.pop();
        arr.push(p, n);
    }

    return arr;
};

const rearrangeArray = (nums) => {
    const arr = new Array(nums.length).fill(0);
    let pos = 0,
        neg = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            arr[pos] = nums[i];
            pos += 2;
        } else {
            arr[neg] = nums[i];
            neg += 2;
        }
    }

    return arr;
};
