/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    return n
        .toString(2)
        .split("1")
        .slice(1, -1)
        .reduce((prev, cur) => Math.max(prev, cur.length + 1), 0);
};

const binaryGap = (n) => {
    const bins = n.toString(2);

    let max = 0,
        last = 0,
        i = 0;
    while (i < bins.length) {
        if (bins[i] === "1") {
            let distance = i - last;
            last = i;
            max = Math.max(max, distance);
        }
        i++;
    }

    return max;
};
