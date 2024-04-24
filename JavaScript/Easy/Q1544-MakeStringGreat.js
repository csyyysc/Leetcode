/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    while (true) {
        let len = s.length;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] !== s[i + 1] && s[i].toUpperCase() === s[i + 1].toUpperCase()) {
                s = s.substring(0, i) + s.substring(i + 2, len);
            }
        }
        if (len === s.length) break;
        len = s.length;
    }
    return s;
};
