/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s, str = "") {
    for (let i = 0; i < s.length; i++) {
        i % 2 === 0 ? str += s[i] : str += shift(s[i - 1], s[i]);
    }

    return str;
};

function shift(c, offset) {
    return String.fromCharCode(c.charCodeAt() + +offset);
}
