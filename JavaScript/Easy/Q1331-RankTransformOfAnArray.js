/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let rank = 1;
    const sorted = [...arr].sort((a, b) => a - b);
    const map = {};
    for (const num of sorted) {
        if (!map[num]) map[num] = rank++;
    }

    return arr.map((el) => map[el]);
};

const arrayRankTransform = (arr) => {
    const map = new Map();
    [
        ...Array.from(new Set(arr))
            .sort((a, b) => a - b)
            .map((x, i) => map.set(x, i + 1)),
    ];
    return arr.map((el) => map.get(el));
};
