/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    function isPalin(word) {
        let left = 0,
            right = word.length - 1;
        while (left <= right) {
            if (word[left] !== word[right]) return false;
            left++, right--;
        }
        return true;
    }

    for (let i = 0; i < words.length; i++) {
        if (isPalin(words[i])) return words[i];
    }

    return "";
};
