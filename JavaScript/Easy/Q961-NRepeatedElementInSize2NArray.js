/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    for (const key in map) {
        if (map[key] === nums.length / 2) return key;
    }
};

const repeatedNTimes = (nums) => {
    const set = new Set();

    for (const num of nums) {
        if (set.has(num)) return num;
        set.add(num);
    }
};
