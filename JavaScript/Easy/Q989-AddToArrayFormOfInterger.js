/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let i = num.length - 1;
    const digits = [];

    while (i >= 0 || k > 0) {
        if (i >= 0) {
            digits.push((num[i] + k) % 10);
            k = Math.trunc((num[i] + k) / 10);
            i--;
        } else {
            digits.push(k % 10);
            k = Math.trunc(k / 10);
        }
    }

    return digits.reverse();
};
