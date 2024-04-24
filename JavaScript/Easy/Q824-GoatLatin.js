/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    sentence = sentence.split(' ');
    for(let i = 0; i < sentence.length; i++) {
        if(vowels.includes(sentence[i][0])) sentence[i] = sentence[i].concat('ma');
        else sentence[i] = sentence[i].substring(1).concat(sentence[i][0] + 'ma');
        sentence[i] = sentence[i].concat('a'.repeat(i + 1));
    }

    return sentence.join(' ');
};

const toGoatLatin = (sentence) => {
    let count = 1;
    const map = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = [];
    
    for(let word of sentence.split(' ')) {
        if(!map.has(word[0])) {
            word += word[0];
            word = word.slice(1);
        }
        word += 'ma';
        word += 'a'.repeat(count++);
        arr.push(word);
    }
    return arr.join(' ');
}