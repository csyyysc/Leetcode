/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;

    for(const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
    }
    return !ransomNote;
}

const canConstruct = (r, m) => {
    const mChars = new Map();

    for(const char of m) {
        if(mChars.has(char)) {
            mChars.set(char, mChars.get(char) + 1);
        } else {
            mChars.set(char, 1);
        }
    }

    for(const char of r) {
        if(mChars.has(char)) {
            mChars.set(char, mChars.get(char) - 1);
        } else {
            return false;
        }
    }
    return true;
}

function canConstruct(r, m) {
    const alpha = new Array(26).fill(0);

    for(let i = 0; i < m.length; i++) {
        alpha[m.charCodeAt(i) - 97]++;
    }

    for(let i = 0; i < r.length; i++) {
        let target = r.charCodeAt(i) - 97;
        if(!alpha[target]) return false
        alpha[target]--;
    }

    return true;
}