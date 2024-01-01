/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    const groups = [];

    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            if (i - j + 1 >= 3) groups.push([j, i]);
            j + 1;
        }
    }

    return groups;
};
