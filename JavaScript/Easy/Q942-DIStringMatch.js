/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMath = function (s) {
    let count1 = -1,
        count2 = s.length + 1;
    const perm = [];

    for (let i = 0; i <= s.length; i++) {
        if (s[i] === "I") {
            count1++;
            perm.push(count1);
        } else {
            count2--;
            perm.push(count2);
        }
    }

    return perm;
};
