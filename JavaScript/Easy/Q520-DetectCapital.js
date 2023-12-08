/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substring(1).toLowerCase();
};