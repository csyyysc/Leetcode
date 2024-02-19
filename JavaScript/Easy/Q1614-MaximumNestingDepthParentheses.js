/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let mvps = 0,
        counter = 0;

    for (const c of s) {
        if (c === "(") counter++;
        if (c === ")") counter--;
        mvps = Math.max(mvps, counter);
    }

    return mvps;
};
