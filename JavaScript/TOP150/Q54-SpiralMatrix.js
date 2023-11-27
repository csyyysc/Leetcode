/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const spiral = [];

    while(matrix.length) {
        spiral.push(...matrix.shift());
        for(const m of matrix) {
            const val = m.pop();
            if(val !== undefined) {
                spiral.push(val);
                m.reverse();
            }
        }
        matrix.reverse();
    }
    return spiral;
}