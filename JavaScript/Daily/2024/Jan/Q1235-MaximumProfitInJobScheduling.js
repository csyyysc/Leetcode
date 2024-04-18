/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
// var jobScheduling = function (startTime, endTime, profit) {
//     const n = startTime.length;
//     const jobs = [];

//     for (let i = 0; i < n; i++) jobs.push({ s: startTime[i], e: endTime[i], p: profit[i] });
//     jobs.sort((x, y) => x.e - y.e);

//     let dp = new Array(n);
//     dp[0] = jobs[0].p;

//     for (let j = 1; j < n; j++) {
//         let profit = jobs[j].p;
//         let task = -1;
//         for (let k = j - 1; k >= 0; k--) {
//             if (jobs[k].e <= jobs[j].s) {
//                 task = k;
//                 break;
//             }
//         }
//         if (task !== -1) profit += dp[task];
//         dp[j] = Math.max(profit, dp[j - 1]);
//     }

//     return dp[n - 1];
// };

const jobScheduling = (startTime, endTime, profit) => {
    const n = startTime.length;
    const jobs = [];

    for (let i = 0; i < n; i++) jobs.push({ s: startTime[i], e: endTime[i], p: profit[i] });
    jobs.sort((x, y) => x.e - y.e);

    // DP array to store maximum profit
    const dp = new Array(n).fill(0);
    dp[0] = jobs[0].p;

    /**
     * Find the last job that does not overlap with the current job using binary search
     */
    function binarySearcch(i) {
        // Two Pointer
        let left = 0,
            right = i - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (jobs[mid].e <= jobs[i].s) {
                if (jobs[mid + 1].e <= jobs[i].s) {
                    left = mid + 1;
                } else {
                    // Non-overlapping job
                    return mid;
                }
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    /**
     * Start to loop over the array to calculate max profit, and starts
     * at index 1 as index 0 was pushed
     */
    for (let i = 1; i < n; i++) {
        let profit = jobs[i].p;
        let lastIdx = binarySearcch(i);

        if (lastIdx !== -1) profit += dp[lastIdx];

        dp[i] = Math.max(dp[i - 1], profit);
    }

    return dp[n - 1];
};
