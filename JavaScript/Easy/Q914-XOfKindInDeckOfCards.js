/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    const map = {};
    deck.forEach((d) => (map[d] || 0) + 1);

    const groups = Object.values(map);
    let g = groups[0];

    for (let i = 1; i < groups.length; i++) {
        g = gcd(g, groups[i]);
        if (g < 2) return false;
    }
    return g >= 2;
};

const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x));
