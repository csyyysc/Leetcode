/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let count = 0;
    const map = new Map();

    for (const [a, b] of dominoes) {
        const key = a < b ? `${a}${b}` : `${b}${a}`;

        if (map.has(key)) {
            const target = map.get(key) + 1;
            map.set(key, target);
            count += target;
        } else {
            map.set(key, 0);
        }
    }

    return count;
};
