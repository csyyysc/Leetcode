/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(" ").filter(x => x !== "").length;
}

const countSegments = (s) => s.split(' ').filter(Boolean).length;