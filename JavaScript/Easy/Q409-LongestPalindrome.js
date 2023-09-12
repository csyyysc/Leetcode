/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    if(s.length === 1) return 1;
    
    let ans = 0;
    let keys = {};

    for(const c of s) {
        keys[c] = (keys[c] || 0) + 1;
        if(keys[c] % 2 === 0) ans += 2;
    }

    return s.length > ans ? ans + 1 : ans;
};

const longestPalindrome = (s) => {
    let count = 0;
    const set = new Set();

    for(const c of s) {
        if(set.has(c)) {
            count += 2;
            set.delete(c);
        } else {
            set.add(c);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
}
