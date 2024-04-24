/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let palins = 0;
    const n = s.length;

    function isPalin(str) {
        let left = 0,
            right = str.length - 1;
        while (left <= right) {
            if (str[left] !== str[right]) return false;
            left++, right--;
        }
        return true;
    }

    let l = 1;
    while (l <= n) {
        for (let i = 0; i < n; i++) {
            if (i + l <= n) {
                let str = s.substring(i, i + l);
                if (isPalin(str)) palins++;
            }
        }
        l++;
    }

    return palins;
};

const countSubstrings = (s) => {
    let palins = 0;
    const n = s.length;

    function countPalindrome(l, r) {
        let res = 0;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            res++, l--, r++;
        }

        return res;
    }

    for (let i = 0; i < n; i++) {
        palins += countPalindrome(i, i); // Odd Length
        palins += countPalindrome(i, i + 1); // Even Length
    }

    return palins;
};

function countSubstrings(s) {
    let palins = 0;
    const n = s.length;
    // 2D matrix for storing the result of substrings
    const dp = [...new Array(n)].map(() => new Array(n).fill(0));

    // Go through all substring lengths
    for (let l = 0; l < n; l++) {
        // Go through all substrings with given lengths
        for (let i = 0; i + l < n; i++) {
            const j = i + l;
            // On the diagonal means substring with length 1
            if (l === 0) {
                dp[i][j] = 1;
                palins++;
            } else if (l === 1) {
                // Only need to check if chars at end are same
                if (s.charAt(i) === s.charAt(j)) {
                    dp[i][j] = 1;
                    palins++;
                }
            } else {
                // AND Check if substring in between them is palindromic
                if (s.charAt(i) === s.charAt(j) && dp[i + 1][j - 1] === 1) {
                    dp[i][j] = 1;
                    palins++;
                }
            }
        }
    }

    return palins;
}
