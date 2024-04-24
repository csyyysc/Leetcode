/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for(let i = cost.length - 3; ~i; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1]);
}

const minCostClimbingStairs = (cost) => {
    if(cost.length === 1) return 0;
    if(cost.length === 2) return Math.min(cost[0], cost[1]);

    let minCostOne = cost[1];
    let minCostTwo = cost[0];
    for(let n = 2; n < cost.length; i++) {
        const minCost = cost[n] + Math.min(minCostOne, minCostTwo);
        minCostTwo = minCostOne;
        minCostOne = minCost;
    }
    return Math.min(minCostOne, minCostTwo);
}
