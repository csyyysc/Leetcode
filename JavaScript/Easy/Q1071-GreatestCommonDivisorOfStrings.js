/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    let min = Math.min(str1.length, str2.length);
    for (let i = min; i > 0; i--) {
        if (str1.length % i === 0 && str2.length % i === 0) {
            return str1.substring(0, i);
        }
    }
};

const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return "";

    function gcd(len1, len2) {
        return len2 === 0 ? len1 : gcd(len2, len1 % len2);
    }

    return str1.substring(0, gcd(str1.length, str2.length));
};
