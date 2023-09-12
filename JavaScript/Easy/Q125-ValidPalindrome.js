/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replaceAll(/[^a-zA-Z0-9]/gi, '');
    str = str.toLowerCase();

    const strLen = str.length;
    for(let i = 0; i < strLen / 2; i++) {
        if(str[i] !== str[strLen - i - 1]) return false;
    }
    return true;
};