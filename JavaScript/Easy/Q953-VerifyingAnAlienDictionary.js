/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const map = {};

    for (let i = 0; i < order.length; i++) {
        map[order[i]] = 26 - i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        let len = Math.max(word1.length, word2.length);
        for (let j = 0; j < len; j++) {
            if (map[word1[j]] > map[word2[j]]) break;
            if (map[word1[j]] < map[word2[j]] || !map[word2[j]]) {
                return false;
            }
        }
    }

    return true;
};

const isAlienSorted = (words, order) => {
    const map = {};
    for (let o = 0; o < order.length; o++) map[order[o]] = o;

    function isValidate(c, p) {
        const len = Math.min(c.length, p.length);

        for (let i = 0; i < len; i++) {
            if (map[c[i]] > map[p[i]]) return true;
            if (map[c[i]] < map[p[i]]) return false;
        }

        return c.length >= p.length;
    }

    for (let i = 1; i < words.length; i++) {
        if (!isValidate(words[i], words[i - 1])) return false;
    }

    return true;
};
