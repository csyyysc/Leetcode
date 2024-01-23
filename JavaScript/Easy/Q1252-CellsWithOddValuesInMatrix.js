/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    let matrix = new Array(m).fill([]).map(() => new Array(n).fill(0));

    for (const [row, col] of indices) {
        matrix[row] = matrix[row].map((val) => val + 1);
        matrix = matrix.map((_, r) => matrix[r].map((val, c) => (c === col ? val + 1 : val)));
    }

    return matrix.flat().filter((el) => el % 2 !== 0).length;
};

const oddCells = (r, c, indices) => {
    let oddRow = 0,
        oddCol = 0;
    const rCount = new Uint8Array(r),
        cCount = new Uint8Array(c);

    for (let i = 0; i < indices.length; i++) {
        (++rCount[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow;
        (++cCount[indices[i][1]] & 1) === 1 ? ++oddCol : --oddCol;
    }

    return oddRow * c + oddCol * r - 2 * oddRow * oddCol;
};
