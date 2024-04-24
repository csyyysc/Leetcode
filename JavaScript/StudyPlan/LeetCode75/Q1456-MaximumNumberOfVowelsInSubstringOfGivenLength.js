/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function(s, k) {
    const vowel = new Set(['a','e','i','o','u']);

    let max = 0;
    for(let i = 0; i < k; i++) {
        vowel.has(s[i]) && max++;
    }

    for(let i = 0, cur = max; i < s.length - k; i++) {
        vowel.has(s[i]) && cur--;
        vowel.has(s[i + k]) && cur++;
        cur > max && (max = cur);
    }
    return max;
};

