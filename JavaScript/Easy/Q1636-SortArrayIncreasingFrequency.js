/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const map = {};

    for (const num of nums) map[num] = (map[num] || 0) + 1;

    const entries = Object.entries(map);
    entries.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });

    const ans = [];
    entries.forEach((ent) => {
        for (let i = 0; i < ent[1]; i++) {
            ans.push(ent[0]);
        }
    });
    return ans;
};

const frequencySort = (nums) => {
    const counts = [];

    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]] = counts[nums[i]] ? counts[nums[i]] + 1 : 1;
    }

    return nums.sort((a, b) => {
        if (counts[a] > counts[b]) {
            return 1;
        } else if (counts[a] < counts[b]) {
            return -1;
        }
        return b - a;
    });
};
