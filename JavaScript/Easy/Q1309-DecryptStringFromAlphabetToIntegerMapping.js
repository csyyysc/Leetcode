/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let str = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "#") {
            str += String.fromCharCode(+s.substring(i - 2, i) + 96);
            i -= 2;
        } else {
            str += String.fromCharCode(s[i].charCodeAt(0) + 48);
        }
    }

    return str.split("").reverse().join("");
};
