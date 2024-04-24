/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let str1 = "",
        str2 = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            str1 = str1.slice(0, -1);
        } else {
            str1 += s[i];
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            str2 = str2.slice(0, -1);
        } else {
            str2 += t[i];
        }
    }

    return str1 === str2;
};
