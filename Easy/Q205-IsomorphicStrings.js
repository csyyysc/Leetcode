/**
 * @note Reference Method1
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
            return false;
        }
    }
    return true;
};

/**
 * @note Reference Method2
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const mapOne = {};
    const mapTwo = {};

    for(let i = 0; i < s.length; i++) {
        if(mapOne[s.charAt(i)] !== mapTwo[t.charAt(i)]) return false;
        mapOne[s.charAt(i)] = i + 1;
        mapTwo[t.charAt(i)] = i + 1;
    }
    return true;
};