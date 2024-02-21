/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    arr.sort((a, b) => a - b);

    let sum = 0;
    const n = arr.length;
    const five = Math.floor(n * 0.05);
    for (let i = five; i < n - five; i++) {
        sum += arr[i];
    }

    return sum / (n - five * 2);
};
