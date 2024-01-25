/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    if (arr.length === 1) return [-1];

    const n = arr.length;
    let max = -1;
    let nums = new Array(n).fill(-1);

    for (let i = n - 2; i >= 0; i--) {
        max = Math.max(max, arr[i + 1]);
        nums[i] = max;
    }

    return nums;
};

const replaceElements = (arr) => {
    const n = arr.length;
    let max = arr[n - 1];
    arr[n - 1] = -1;

    for (let i = n - 2; i >= 0; i--) {
        let cur = arr[i];
        arr[i] = max;
        if (cur > max) max = cur;
    }

    return arr;
};
