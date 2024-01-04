/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const strs = [...s1.split(" "), ...s2.split(" ")];
    const obj = {};

    for (const str of strs) {
        if (str in obj) {
            obj[str]++;
        } else {
            obj[str] = 1;
        }
    }

    strs.length = 0;

    for (const key in obj) {
        if (obj[key] === 1) strs.push(key);
    }

    return strs;
};

const uncommonFromSentences = (s1, s2) => {
    const wordSet = new Set();
    const removeSet = new Set();
    const combined = `${s1} ${s2}`.split(" ");

    for (const word of combined) {
        if (wordSet.has(word) || removeSet.has(word)) {
            wordSet.delete(word);
            removeSet.add(word);
        } else {
            wordSet.add(word);
        }
    }

    return [...wordSet];
};
