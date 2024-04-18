/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const freq = new Array(nums.length + 1).fill(0);
    const matrix = [];

    for (const num of nums) {
        if (freq[num] >= matrix.length) matrix.push([]);

        matrix[freq[num]].push(num);
        freq[num]++;
    }

    return matrix;
};

const findMatrix = (nums) => {
    let row = {};
    const matrix = [];

    while(nums.length) {
        for(let i = 0; i < nums.length; i++) {
            if(!row[nums[i]]) {
                row[nums[i]] = nums[i];
                nums.splice(i, 1);
                i--;
            }
        }
        matrix.push([...Object.values(row)]);
        row = {};
    }

    return matrix;
}