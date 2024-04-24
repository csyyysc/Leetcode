/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for (let i = 1; i < n; i++) {
        if (
            !String(i).split("").includes("0") &&
            !String(n - i)
                .split("")
                .includes("0")
        )
            return [i, n - i];
    }
};

const getNoZeroIntegers = (n) => {
    let a = 1,
        b = n - 1;

    function hasZero(int) {
        return String(int).includes("0");
    }

    while (hasZero(a) || hasZero(b)) {
        a++;
        b--;
    }

    return [a, b];
};
