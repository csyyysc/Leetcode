/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    const n = arr.length;

    let left = 0,
        right = n - 1,
        window = 0;
    while (window <= n) {
        while (left + window <= right) {
            sum += arr.slice(left, left + window + 1).reduce((sum, cur) => sum + cur, 0);
            left++;
        }
        (left = 0), (window += 2);
    }

    return sum;
};

const sumOddLengthSubarrays = (arr) => {
    let sum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const cont = Math.ceil(((i + 1) * (n - i)) / 2);
        sum += cont * arr[i];
    }

    return sum;
};
