/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0;

    const map = new Map();
    for(const num of nums) {
        map.set(num, 1);
    }

    for(let i in nums) {
        if(map.has(nums[i] - 1)) map.set(nums[i], 0);
    }

    let maxLen = 1;
    for(const num of nums) {
        if(map.get(num) === 1) {
            let seqLen = 1;
            while(map.has(num + seqLen)) seqLen++;
            maxLen = Math.max(maxLen, seqLen);
        }
    }

    return maxLen;
}

const longestConsecutive = (nums) => {
    let count = 0, max = 0;
    const set = new Set();

    for(const num of nums) set.add(num);

    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if(!set.has(cur - i)) {
            count = 1;
            while(set.has(cur + i)) {
                count++;
                cur++;
            }
            max = Math.max(max, count);
        }
        if(max > nums.length / 2) break;
    }
    return max;
} 