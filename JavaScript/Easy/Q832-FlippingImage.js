/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    const n = image.length;

    for (let i = 0; i < n; i++) {
        image[i] = image[i].reverse();
        for (let j = 0; j < n; j++) {
            image[i][j] = image[i][j] ^ 1;
        }
    }

    return image;
};

const flipAndInvertImage = (image) => image.map((row) => row.reverse().map((el) => el ^ 1));
