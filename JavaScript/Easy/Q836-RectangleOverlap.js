/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
const [ax1, ay1, ax2, ay2] = rec1;
const [bx1, by1, bx2, by2] = rec2;

    const left = Math.max(ax1, bx1);
    const right = Math.min(ax2, bx2);

    const bottom = Math.max(ay1, by1);
    const top = Math.min(ay2, by2);

    return right > left && top > bottom ? true : false;
};

const isRectangleOverlap = (rec1, rec2) => {
    const [ax1, ay1, ax2, ay2] = rec1;
    const [bx1, by1, bx2, by2] = rec2;

    return ax1 < bx2 && bx1 < ax2 && ay1 < by2 && by1 < ay2;
};
