/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let lines = 1,
        last = 0;
    const base = "a".charCodeAt();

    for (let i = 0; i < s.length; i++) {
        const width = widths[s.charCodeAt(i) - base];
        last += width;
        if (last > 100) {
            lines++;
            last = width;
        }
    }
    return [lines, last];
};
