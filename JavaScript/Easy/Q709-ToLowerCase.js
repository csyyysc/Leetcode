/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase();
};

const toLowerCase = (s) => {
    let ans = '';
    for(const char of s) {
        const c = char.charCodeAt();
        ans += c > 64 && c < 91 ? String.fromCharCode(c + 32) : char;
    }
    return ans;
}