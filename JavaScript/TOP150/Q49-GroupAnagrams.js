/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagram = function(strs) {
    let obj = {};
    for(const str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
}