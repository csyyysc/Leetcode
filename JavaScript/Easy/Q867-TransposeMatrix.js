/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    const transpose = [];

    for (let i = 0; i < matrix[0].length; i++) {
        const elements = [];
        for (let j = 0; j < matrix.length; j++) {
            elements.push(matrix[j][i]);
        }
        transpose.push(elements);
    }

    return transpose;
};
