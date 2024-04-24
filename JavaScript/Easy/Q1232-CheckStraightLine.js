/**
 * @param {number[][]} coor
 * @return {boolean}
 */
var checkStraightLine = function (coor) {
    if (coor.length === 2) return true;

    function findSlope(x, y) {
        const [x1, y1] = x;
        const [x2, y2] = y;
        return x2 - x1 !== 0 ? (y2 - y1) / (x2 - x1) : Infinity;
    }

    const cp = findSlope(coor[0], coor[1]);
    for (let i = 2; i < coor.length; i++) {
        const next = findSlope(coor[i - 1], coor[i]);
        if (cp !== next) return false;
    }

    return true;
};

const checkStraightLine = (coor) => {
    if (coor.length === 2) return true;

    for (let i = 2; i < coor.length; i++) {
        if (!isLine(coor[0], coor[1], coor[i])) return false;
    }

    function isLine(x, y, p) {
        const [x0, y0] = x;
        const [x1, y1] = y;
        const [xn, yn] = p;
        return (yn - y0) * (x1 - x0) === (y1 - y0) * (xn - x0);
    }

    return true;
};
