/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const bannedSet = new Set(banned);
    const words = paragraph.toLowerCase().split(/\W+/);
    const map = {};

    let answer = { count: 0 , word: ''};

    for(const word of words) {
        if(!bannedSet.has(word)) {
            map[word] = map[word] ? map[word] + 1 : 1;
        }

        if(map[word] > answer.count) {
            answer.count = map[word];
            answer.word = word;        
        }
    }
    return answer.word;
};