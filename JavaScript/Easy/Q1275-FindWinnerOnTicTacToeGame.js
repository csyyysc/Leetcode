/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const xMoves = [];
    const oMoves = [];

    function checkRow(rows) {
        let row1 = 0,
            row2 = 0,
            row3 = 0;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i][0] === 0) row1++;
            if (rows[i][0] === 1) row2++;
            if (rows[i][0] === 2) row3++;
        }
        return row1 === 3 || row2 === 3 || row3 === 3;
    }

    function checkCol(cols) {
        let col1 = 0,
            col2 = 0,
            col3 = 0;
        for (let i = 0; i < cols.length; i++) {
            if (cols[i][1] === 0) col1++;
            if (cols[i][1] === 1) col2++;
            if (cols[i][1] === 2) col3++;
        }
        return col1 === 3 || col2 === 3 || col3 === 3;
    }

    function checkDia(moves) {
        let leftCount = 0,
            rightCount = 0;
        for (let i = 0; i < moves.length; i++) {
            if (JSON.stringify(moves[i]) === JSON.stringify([0, 0])) leftCount++;
            if (JSON.stringify(moves[i]) === JSON.stringify([1, 1])) leftCount++;
            if (JSON.stringify(moves[i]) === JSON.stringify([2, 2])) leftCount++;
        }
        for (let i = 0; i < moves.length; i++) {
            if (JSON.stringify(moves[i]) === JSON.stringify([0, 2])) rightCount++;
            if (JSON.stringify(moves[i]) === JSON.stringify([1, 1])) rightCount++;
            if (JSON.stringify(moves[i]) === JSON.stringify([2, 0])) rightCount++;
        }
        return leftCount === 3 || rightCount === 3;
    }

    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) xMoves.push(moves[i]);
        else oMoves.push(moves[i]);
    }

    if (checkRow(xMoves) || checkCol(xMoves) || checkDia(xMoves)) return "A";
    if (checkRow(oMoves) || checkCol(oMoves) || checkDia(oMoves)) return "B";

    if (moves.length === 9) return "Draw";
    if (moves.length < 9) return "Pending";
};

const tictactoe = (moves) => {
    const grid = new Uint8Array(9);
    const cases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    /**
     *  Original Grid
     *     0 1 2
     *     3 4 5
     *     6 7 8
     */
    for (let i = 0; i < moves.length; i++) {
        grid[moves[i][0] * 3 + moves[i][1]] = (i % 2) + 1;
    }

    for (let i = 0; i < cases.length; i++) {
        const role = grid[cases[i][0]];
        if (role !== 0 && grid[cases[i][1]] === role && grid[cases[i][2]] === role) {
            return role === 1 ? "A" : "B";
        }
    }

    return moves.length === 9 ? "Draw" : "Pending";
};
