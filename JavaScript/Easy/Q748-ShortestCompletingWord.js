/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let match = { found: false, word: "" };
    let license = licensePlate
        .toUpperCase()
        .replace(/[^A-Z]/g, "")
        .split("");

    words.forEach((word) => {
        if (!match.word || word.length < match.word.length) {
            let replacedWord = word.toUpperCase();
            /**
             * replace() will only replace 1 'S' even if there are 2 'S'
             */
            license.forEach((char) => {
                replacedWord = replacedWord.replace(char, "");
            });

            if (word.length - license.length === replacedWord.length) {
                match.found = true;
                match.word = word;
            }
        }
    });
    return match.word;
};
