/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1.length > str2.length && str1.substring(0, str2.length) === str2)
        return gcdOfStrings(str1.slice(str2.length), str2);
    else if(str1.length < str2.length && str2.substring(0, str1.length) === str1)
        return gcdOfStrings(str1, str2.slice(str1.length));
    else if(str1.length === str2.length && str1 === str2) 
        return str1;
    return "";
};

const gcdOfStrings = (str1, str2) => {
    if(str1 + str2 !== str2 + str1) return "";

    const gcd = (len1, len2) => (0 === len2 ? len1 : gcd(len2, len1 % len2));
    return str1.substring(0, gcd(str1.length, str2.length));
}