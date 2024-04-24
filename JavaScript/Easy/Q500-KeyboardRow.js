/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const result = [];
    const keyboards = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm"),
    ];

    for(const word of words) {
        const chars = word.toLowerCase().split('');
        for(const keyboard of keyboards) {
            if(chars.every(keyboard.has, keyboard)) {
                result.push(word);
                break;
            }
        }
    }

    return result;
}