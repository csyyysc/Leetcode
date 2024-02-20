/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const n = code.length;

    function helper(codes, k, direction) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 1; j <= Math.abs(k); j++) {
                sum += codes[(i + j) % n];
            }
            code[i] = sum;
        }

        direction ? code : code.reverse();
    }

    if (k === 0) {
        return new Array(n).fill(0);
    } else if (k > 0) {
        helper([...code], k, true);
    } else {
        helper([...code].reverse(), k, false);
    }

    return code;
};
