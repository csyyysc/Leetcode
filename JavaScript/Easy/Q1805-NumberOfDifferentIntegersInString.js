/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    word = word.replaceAll(/[a-z]/g, " ").split(" ");
    const nums = new Set();
    for (const w of word) {
        if (w !== "" && !nums.has(BigInt(w))) nums.add(BigInt(w));
    }
    return nums.size;
};
