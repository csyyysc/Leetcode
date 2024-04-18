/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        const idx = s.indexOf(s[i]);
        if (s.indexOf(s[i], idx + 1) === -1) return i;
    }

    return -1;
};

const firstUniqChar = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    }

    return -1;
};
