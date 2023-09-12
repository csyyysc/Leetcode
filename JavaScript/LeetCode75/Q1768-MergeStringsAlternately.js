/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let wordOneLen = word1.length;
    let wordTwoLen = word2.length;

    let mergedStr = "";
    let i = 0, j = 0;
    while(i < wordOneLen && j < wordTwoLen) {
        mergedStr += word1[i];
        mergedStr += word2[j];
        i++, j++;
    }

    while(i < wordOneLen) {
        mergedStr += word1[i];
        i++;
    }

    while(j < wordTwoLen) {
        mergedStr += word2[j];
        j++;
    }

    return mergedStr;
};


const mergeAlternately = (word1, word2) => {
    let str = "";
    for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if(i < word1.length) str += word1[i];
        if(i < word2.length) str += word2[i];
    }

    return str;
}