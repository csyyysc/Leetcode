/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    s = s.split(" ");
    let str = "";
    for (let i = 0; i < k; i++) {
        if (i === k - 1) str += s[i];
        else str += s[i] + " ";
    }
    return str;
};

function truncateSentence(s, k) {
    s = s.split(" ");
    if (s.length <= k) return s.join(" ");
    else {
        while (s.length > k) {
            s.pop();
        }
        return s.join(" ");
    }
}
