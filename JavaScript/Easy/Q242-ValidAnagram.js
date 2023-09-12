/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const hashTable1 = {};
    const hashTable2 = {};
    let len = s.length & t.length;

    while(len) {
        if(s[len - 1] in hashTable1) {
            hashTable1[s[len - 1]]++;
        } else {
            hashTable1[s[len - 1]] = 1;
        }

        if(t[len - 1] in hashTable2) {
            hashTable2[t[len - 1]]++;
        } else {
            hashTable2[t[len - 1]] = 1;
        }
        len--;
    }

    return _.isEqual(hashTable1, hashTable2);
};

/**
 * @description Reference Method1
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

/**
 * @description Reference Method2
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;

    let freq = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        freq[s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
        freq[t.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    return freq.every(i => i === 0);
}