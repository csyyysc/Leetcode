/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.reduce((str, word) => str + word, "") === word2.reduce((str, word) => str + word, "");
};
