/**
 * @description Reference Method1
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
};

const canConstruct = (ransomNote, magazine) => {
    if(ransomNote.length > magazine.length) return false;

    for(let i = 0; i < ransomNote.length; i++) {
        const l = ransomNote.substring(i, i + 1);

        if(magazine.indexOf(l) === -1) return false;
        magazine = magazine.replace(l, '');
    }

    return true;
}