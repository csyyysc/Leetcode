/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let jewel = {},
        diamonds = 0;
    for (let i = 0; i < jewels.length; i++) {
        jewel[jewels[i]] = jewel[jewels[i]] || true;
    }

    for (let j = 0; j < stones.length; j++) {
        if (stones[j] in jewel) diamonds++;
    }
    return diamonds;
};

const numJewelsInStones = (jewels, stones) => {
    let diamonds = 0;
    const set = new Set(jewels);
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) diamonds++;
    }
    return diamonds;
};
