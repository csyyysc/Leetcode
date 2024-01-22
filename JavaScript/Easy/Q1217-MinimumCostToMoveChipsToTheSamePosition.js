/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let cost = 0;

    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2) cost++;
    }

    return cost >= position.length / 2 ? position.length - cost : cost;
};

const minCostToMoveChips = (chips) => {
    let odd = 0,
        even = 0;

    for (const chip of chips) {
        if (chip % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return Math.min(odd, even);
};
