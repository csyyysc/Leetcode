/**
 * "Subsequences" means not need to be continuous chars,
 * therefore the maximum steps would not exceed the number of chars.
 */

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    let left = 0,
        right = s.length - 1;

    while (left <= right) {
        if (s[left] !== s[right]) return 2;
        left++, right--;
    }

    return 1;
};
