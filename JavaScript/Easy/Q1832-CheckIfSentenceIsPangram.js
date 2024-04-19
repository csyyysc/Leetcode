/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    const set = new Set();

    for (const c of sentence) {
        if (!set.has(c)) set.add(c);
    }

    return set.size === 26;
};
