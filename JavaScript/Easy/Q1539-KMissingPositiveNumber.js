/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let rank = 0,
        num = 0;

    while (rank !== k) {
        num++;
        if (!arr.includes(num)) rank++;
    }

    return num;
};
