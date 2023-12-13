/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const arr = mat.flat();
    if(r * c !== arr.length) return mat;

    const matrix = [];
    while(arr.length) matrix.push(arr.splice(0, c));
    return matrix;
};