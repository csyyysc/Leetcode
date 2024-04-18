/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const wMap = {},
        lMap = {};

    for (let i = 0; i < matches.length; i++) {
        const [w, l] = matches[i];
        if (!wMap[w]) wMap[w] = true;
        lMap[l] = (lMap[l] || 0) + 1;
    }

    const ans = [[], []];
    for (const w in wMap) {
        if (!(w in lMap)) ans[0].push(w);
    }

    for (const l in lMap) {
        if (lMap[l] === 1) ans[1].push(l);
    }

    return ans;
};

const findWinners = (matches) => {
    let losses = new Array(100001).fill(0);

    for (const [w, l] of matches) {
        if (losses[w] === 0) losses[w] = -1;
        if (losses[l] === -1) losses[l] = 1;
        else losses[l]++;
    }

    const zeroLoss = [],
        oneLoss = [];
    for (let i = 1; i <= 100000; i++) {
        if (losses[i] === -1) zeroLoss.push(i);
        else if (losses[i] === 1) oneLoss.push(i);
    }

    return [zeroLoss, oneLoss];
};
