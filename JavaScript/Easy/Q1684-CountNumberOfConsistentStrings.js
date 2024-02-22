/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let count = 0;
    const map = {};
    for (const c of allowed) map[c] = true;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (!(word[j] in map)) break;
            if (j === word.length - 1) count++;
        }
    }

    return count;
};

const countConsistentStrings = (allowed, words) => {
    const set = new Set(allowed);
    return words.reduce((a, w) => {
        return w.split("").every((l) => set.has(l)) ? ++a : a;
    }, 0);
};
