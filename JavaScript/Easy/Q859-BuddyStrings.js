/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, t) {
    if (s.length !== t.length) return false;

    const diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) diff.push(i);
    }

    if (diff.length > 2) return false;
    if (!diff.length) return s.length !== [...new Set(s)].length;

    const [i, j] = diff;
    return s[i] === t[j] && s[j] === t[i];
};
