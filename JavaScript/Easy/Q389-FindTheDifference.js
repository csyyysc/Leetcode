/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(let i = 0; i < s.length; i++) {
        t = t.replace(s[i], "");
    }
    return t;
};

const findTheDifference = (s, t) => {
    const sumOne = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    const sumTwo = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);

    return String.fromCharCode(sumTwo - sumOne);
}