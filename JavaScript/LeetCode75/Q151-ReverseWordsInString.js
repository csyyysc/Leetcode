/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").filter(el => el !== "").reverse().join(" ");
};

const reverseWords = (s) => {
    const words = [];

    let word = [];
    for(let i = 0; i < s.length; i++) {
        if(s.chatAt(i) === ' ') {
          word.length > 0 && words.unshift(word.join(''));
          word = [];
        } else {
          word.push(s.chatAt(i));
        }
    }

    word.length > 0 && words.unshift(word.join(''));
    return words.join(' ');
}