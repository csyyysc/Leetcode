/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    s = new Set(s.replaceAll(/[a-z]/g, ""));
    return s.size < 2 ? -1 : [...s].sort((a, b) => b - a)[1];
};
