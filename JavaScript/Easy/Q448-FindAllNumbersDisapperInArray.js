/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisapperedNumbers = function(nums) {
    const map = new Map();
    nums.forEach((num, i) => map.set(num, i));

    const disapper = [];
    for(let i = 1; i <= nums.length; i++) {
        if(!map.has(i)) disapper.push(i);
    }
    return disapper;
}

const findDisapperedNumbers = (nums) => {
    const disapper = [];
    for(let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let idx = num - 1;
        nums[idx] = Math.abs(num[idx]) * -1;
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) disapper.push(i);
    }
    return disapper;
}