/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;

    let lps = "";
    const n = s.length;
    const dp = Array.from({ length: n + 1 }).map(() => new Array(n + 1).fill(false));

    // Base case for one char
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    // Base case for two chars
    for (let i = 0; i < n; i++) {
        if (s[i] === s[i + 1]) dp[i][i + 1] = true;
        if (d[i][i + 1]) lps = s.substring(i, i + 2);
    }

    // Expand to more chars
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 2; j < n; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j]) lps = lps.length < j - i + 1 ? s.substring(i, j + 1) : lps;
        }
    }

    return lps;
};

const longestPalindrome = (s) => {
    let lps = "";

    function findLongestPalindrome(str, i, j) {
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            i--, j++;
        }
        return str.slice(i + 1, j);
    }

    for (let i = 0; i < s.length; i++) {
        const curr1 = findLongestPalindrome(s, i, i); // Odd Len Case
        const curr2 = findLongestPalindrome(s, i, i + 1); // Even Len Case
        const palin = curr1.length > curr2.length ? curr1 : curr2;
        if (lps.length < palin.length) lps = palin;
    }

    return lps;
};
