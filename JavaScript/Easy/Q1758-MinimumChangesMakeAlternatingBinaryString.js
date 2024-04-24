/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    s = s.split("");
    let ch = 0;
    const n = s.length;

    if (s[0] === "0") {
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0 && s[i] === "1") {
                ch++;
            } else if (i % 2 === 1 && s[i] === "0") {
                ch++;
            }
        }
    } else {
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0 && s[i] === "0") {
                ch++;
            } else if (i % 2 === 1 && s[i] === "1") {
                ch++;
            }
        }
    }

    return Math.min(ch, n - ch);
};

const minOperations = (s) => {
    function countFlips(str, next) {
        let count = 0;
        for (const char of str) {
            if (next !== char) count++;
            next = next === "0" ? "1" : "0";
        }
        return count;
    }

    return Math.min(countFlips(s, "0"), countFlips(s, "1"));
};
