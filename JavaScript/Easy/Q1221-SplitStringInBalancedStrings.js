/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0;

    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") balance++;
        if (s[i] === "L") balance--;
        if (balance === 0) count++;
    }

    return count;
};

const balancedStringSplit = (s) => {
    let balance = 1,
        count = 0;

    for (let i = 1; i < s.length; i++) {
        s[i] === s[0] ? balance++ : balance--;
        if (balance === 0) count++;
    }

    return count;
};
