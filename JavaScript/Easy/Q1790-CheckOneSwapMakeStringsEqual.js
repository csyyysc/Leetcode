/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) return true;

    const map1 = {},
        map2 = {};
    for (const c of s1) map1[c] = (map1[c] || 0) + 1;
    for (const c of s2) map2[c] = (map2[c] || 0) + 1;

    for (const key in map1) {
        if (map1[key] !== map2[key]) return false;
    }

    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) count++;
    }
    return count === 0 || count === 2 ? true : false;
};

const areAlmostEqual = (s1, s2) => {
    if (s1.split("").sort().join("") === s2.split("").sort().join("")) {
        let count = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) count++;
            if (count > 2) return false;
        }
        return true;
    }
    return false;
};
