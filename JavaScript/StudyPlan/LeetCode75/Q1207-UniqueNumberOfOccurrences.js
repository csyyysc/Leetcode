/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(nums) {
    const map = {};
    
    for(let i of nums) {
        map[i] ? map[i]++ : map[i] = 1
    }
    
    const values = Object.values(map);
    return values.length === [... new Set(values)].length;
};