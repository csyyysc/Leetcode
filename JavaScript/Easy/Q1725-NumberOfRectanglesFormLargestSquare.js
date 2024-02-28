/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    const largests = [];
    for (let i = 0; i < rectangles.length; i++) {
        const rec = rectangles[i];
        largests.push(Math.min(rec[0], rec[1]));
    }

    const max = Math.max(...largests);
    return largests.filter((r) => r === max).length;
};
