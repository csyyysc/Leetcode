/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const map = {};

    for (const c of s) {
        map[c] = (map[c] || 0) + 1;
    }

    return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .map(([el, times]) => el.repeat(times))
        .join("");
};
