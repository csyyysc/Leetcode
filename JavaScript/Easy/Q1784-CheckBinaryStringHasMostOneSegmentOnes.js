/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    s = s.split("");
    if (s.length <= 2) return true;
    if (!s.includes("0")) return true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            s = s.splice(i, s.length);
            break;
        }
    }
    return s.includes("1") ? false : true;
};

const checkOnesSegment = (s) => (s.includes("0") ? s.indexOf("0") > s.lastIndexOf("1") : true);

function checkOnesSegment(s) {
    return !s.includes("01");
}
