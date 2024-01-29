/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    // Brute Force
    const n = nums.length;
    const ans = [];

    let i = 0;
    while (i < n) {
        let count = 0;
        let target = nums[i];
        for (let j = 0; j < n; j++) {
            if (i !== j && target > nums[j]) count++;
        }
        i++;
        ans.push(count);
    }

    return ans;
};

// HashMap
const smallerNumbersThanCurrent = (nums) => {
    const map = new Map();

    const arr = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) map.set(arr[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = map.get(nums[i]);
    }
    return nums;
};
