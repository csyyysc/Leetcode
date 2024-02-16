/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    const words = text.split(" ").filter((t) => t !== "");
    const spaces = text.split("").filter((t) => t === " ");

    // As Exception
    if (words.length === 1) return words[0] + " ".repeat(spaces.length);

    const divident = Math.floor(spaces.length / (words.length - 1));

    function helper(word, space) {
        let count = spaces.length;
        let result = "";

        for (let i = 0; i < word.length; i++) {
            result += word[i];
            if (count >= space) (result += " ".repeat(space)), (count -= space);
        }

        if (count > 0) result += " ".repeat(count);
        return result;
    }
    return helper(words, divident);
};
