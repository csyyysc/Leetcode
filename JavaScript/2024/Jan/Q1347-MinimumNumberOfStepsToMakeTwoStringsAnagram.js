/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let count = 0;
    const hash = {};

    for (const l of s) hash[l] = (hash[l] || 0) + 1;

    for (const l of t) {
        if (hash[l]) hash[l]--;
        else count++;
    }

    return count;
};
