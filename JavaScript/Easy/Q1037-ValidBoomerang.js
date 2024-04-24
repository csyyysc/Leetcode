/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    function isCollinear(a, b, c) {
        const v1 = [b[0] - a[0], b[1] - a[1]];
        const v2 = [c[0] - a[0], c[1] - a[1]];

        return crossProduct(v1, v2) === 0;
    }

    function crossProduct(v1, v2) {
        return v1[0] * v2[1] - v2[0] * v1[1];
    }

    return !isCollinear(...points);
};
