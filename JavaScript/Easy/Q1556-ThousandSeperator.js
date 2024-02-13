/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    n = n.toString();

    let t = "";
    const len = n.length;

    for (let i = len; i > 0; i -= 3) {
        const s = n.substring(i - 3, i);
        t.length === 0 ? (t += s) : (t = s + "." + t);
    }

    return t;
};
