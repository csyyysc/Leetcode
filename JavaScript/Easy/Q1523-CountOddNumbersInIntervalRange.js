/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let interval = high - low + 1;

    if (interval % 2 === 0) {
        return interval / 2;
    } else {
        interval = high - low;
        if (low % 2 === 0 && high % 2 === 0) {
            return interval / 2;
        } else {
            return interval / 2 + 1;
        }
    }
};

const countOdds = (l, h) => {
    if (l % 2 === 0) l++;
    if (h % 2 === 0) h--;

    return Math.max(0, (h - l) / 2 + 1);
};
