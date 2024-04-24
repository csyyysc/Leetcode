/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let i = 0;
    while (i < s.length) {
        if (!s.replaceAll(s.substring(0, i), "")) return true;
        i++;
    }
    return false;
};

const repeatedSubstringPattern = (s) => {
    let n = s.length;
    for (let i = 1; i < n / 2; i++) {
        if (n % i === 0) {
            let repeated = "";
            const substr = s.slice(0, i);
            for (let j = 0; j < n / i; j++) {
                repeated += substr;
            }
            if(repeated === s) return true;
        }
    }
    return false;
};

function repeatedSubstringPattern(s) {
    return (s + s).slice(1, -1).includes(s);
}
