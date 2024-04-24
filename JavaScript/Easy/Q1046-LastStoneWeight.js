/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones = stones.sort((a, b) => a - b);
        let len = stones.length;
        let max1 = stones[len - 1];
        let max2 = stones[len - 2];

        if (max1 === max2) stones = stones.slice(0, len - 2);
        else {
            stones = stones.slice(0, len - 1);
            stones[stones.length - 1] = max1 - max2;
        }
    }
    return stones[0] ? stones[0] : 0;
};

const lastStoneWeight = (stones) => {
    while (stones.length > 1) {
        let len = stones.length;
        stones.sort((a, b) => a - b);
        stones[len - 2] = stones[len - 1] - stones[len - 2];
        stones.pop();
    }
    return stones[0];
};
