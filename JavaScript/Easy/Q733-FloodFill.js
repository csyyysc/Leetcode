/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, initColor = image[sr][sc]) {
    if (
        sr < 0 ||
        sc < 0 ||
        sr >= image.length ||
        sc >= image[sr].length ||
        image[sr][sc] !== initColor ||
        image[sr][sc === color]
    )
        return image;

    image[sr][sc] = color;

    floodFill(image, sr + 1, sc, color, initColor);
    floodFill(image, sr - 1, sc, color, initColor);
    floodFill(image, sr, sc + 1, color, initColor);
    floodFill(image, sr, sc - 1, color, initColor);
    return image;
};
