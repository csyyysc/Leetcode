/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] - b[0]);

    let max = 0;
    for (let i = 1; i < points.length; i++) {
        const diff = Math.abs(points[i][0] - points[i - 1][0]);
        max = Math.max(max, diff);
    }

    return max;
};
