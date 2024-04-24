/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let s = "123456789";
    const n = s.length;
    const seqs = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let num = parseInt(s.substring(i, j + 1));
            if (num > high) break;
            if (num >= low) seqs.push(num);
        }
    }

    return seqs.sort((a, b) => a - b);
};
