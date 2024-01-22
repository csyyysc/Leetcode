/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const arr = new Array(nums.length).fill(0).map((_, i) => i + 1);
    const set = new Set();

    let dup = null;
    for (const num of nums) {
        if (set.has(num)) {
            dup = num;
        } else {
            set.add(num);
        }
    }

    let missed = null;
    for (const el of arr) {
        if (!nums.includes(el)) missed = el;
    }

    return [dup, missed];
};

const findErrorNums = (nums) => {
    const n = nums.length;
    const set = new Set(nums);
    const total = (n * (n + 1)) / 2;

    let setSum = 0;
    set.forEach((val) => (setSum += val));
    const numSum = nums.reduce((cur, acc) => cur + acc, 0);
    return [numSum - setSum, total - setSum];
};
