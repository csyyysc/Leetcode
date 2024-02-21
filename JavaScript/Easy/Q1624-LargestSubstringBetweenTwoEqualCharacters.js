/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let max = -1;
    const map = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) max = Math.max(max, i - (map[s[i]] + 1));
        else map[s[i]] = i;
    }

    return max;
};
