/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    chars = chars.split("");
    const charMap = {};

    for (let i = 0; i < chars.length; i++) {
        charMap[chars[i]] = (charMap[chars[i]] || 0) + 1;
    }

    let sum = 0;
    for (let i = 0; i < words.length; i++) {
        const wordMap = {};
        const word = words[i].split("");
        for (let j = 0; j < word.length; j++) {
            wordMap[word[j]] = (wordMap[word[j]] || 0) + 1;
        }

        const isFormed = Object.entries(wordMap).every(([key, value]) => key in charMap && value <= charMap[key]);
        if (isFormed) sum += word.length;
    }

    return sum;
};

const countCharacters = (words, chars) => {
    let sum = 0;
    const counts = new Array(26).fill(0);

    for (const c of chars) counts[c.charCodeAt(0) - "a".charCodeAt()]++;

    for (const word of words) {
        if (canForm(word, counts)) sum += word.length;
    }

    function canForm(word, counts) {
        const c = new Array(26).fill(0);

        for (const w of word) {
            const x = w.charCodeAt(0) - "a".charCodeAt();

            c[x]++;
            if (c[x] > counts[x]) return false;
        }

        return true;
    }

    return sum;
};
