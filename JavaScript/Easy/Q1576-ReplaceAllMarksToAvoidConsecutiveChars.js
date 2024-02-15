/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    if (s.length === 1) return "a";

    function helper(bCompare, aCompare) {
        let code = 97;
        while (code === bCompare || code === aCompare) code++;
        s = s.replace("?", String.fromCharCode(code));
    }

    for (let i = 0; i < s.length; i++) {
        let qIndex = s.indexOf("?");

        if (qIndex === -1) return s;

        if (qIndex === 0) {
            const after = s[qIndex + 1].charCodeAt();
            helper(after, "");
        } else if (qIndex === s.length - 1) {
            const prev = s[qIndex - 1].charCodeAt();
            helper(prev, "");
        } else {
            const prev = s[qIndex - 1].charCodeAt();
            const after = s[qIndex + 1].charCodeAt();
            helper(prev, after);
        }
    }

    return s;
};
