/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const n = s.length;
    let ans = [];
    let prev = Infinity;

    for(let i = 0; i < n; i++) {
        if(s[i] === c) prev = i;
        ans[i] = Math.abs(prev - i);
    } 

    prev = Infinity;

    for(let i = n - 1; i >= 0; i--) {
        if(s[i] === c) prev = i;
        ans[i] = Math.min(ans[i], prev - i);
    }
    return ans;
};