/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let dis = Infinity;
    let minIndex = Infinity;

    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (p[0] === x || p[1] === y) {
            const newDis = Math.abs(p[0] - x) + Math.abs(p[1] - y);
            if (newDis < dis) (dis = newDis), (minIndex = i);
        }
    }

    return minIndex === Infinity ? -1 : minIndex;
};
