/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function (s) {
    let maxFreq = -1;
    const freq = {};

    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[c]);
    }

    const taken = {},
        ans = [];
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        // Only the most frequent characters remain
        if (!taken[c]) {
            if (freq[c] === maxFreq) {
                taken[c] = 1;
                ans.push(c);
            }
        }
    }

    return ans.reverse().join("");
};
