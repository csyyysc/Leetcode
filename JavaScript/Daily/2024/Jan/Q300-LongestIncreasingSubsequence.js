/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!nums.length) return 0;

    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }

    return Math.max(...dp);
};

const lengthOfLIS = (nums) => {
    let minEnd = [nums[0]];

    for(let i = 1; i < nums.length; i++) {
        let j = -1;
        let start = 0;
        let end = minEnd.length - 1;
        while(start <= end) {
            const mid = (start + end) >> 1;
            if(minEnd[mid] < nums[i]) {
                j = mid;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        minEnd[j + 1] = nums[i];
    }
    
    return minEnd.length;
}