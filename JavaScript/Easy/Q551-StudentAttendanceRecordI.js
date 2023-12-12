/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    if(s.includes("LLL")) return false;
    if(s.split("").filter(c => c === "A").length >= 2) return false;
    return true;
};

