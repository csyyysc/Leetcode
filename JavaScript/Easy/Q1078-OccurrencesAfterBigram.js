/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    const bigram = [];

    text = text.split(" ");

    for (let i = 0; i < text.length - 2; i++) {
        if (text[i] === first && text[i + 1] === second) bigram.push(text[i + 2]);
    }

    return bigram;
};
