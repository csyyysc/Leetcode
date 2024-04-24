/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let t = new Array(s.length);

    for (let i = 0; i < indices.length; i++) {
        t[indices[i]] = s[i];
    }

    return t.join("");
};
