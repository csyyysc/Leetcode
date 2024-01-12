/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let attacks = 0;
    let rook = [0, 0];
    const n = board.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "R") rook = [i, j];
        }
    }

    // Up
    for (let i = rook[1]; i >= 0; i--) {
        if (board[rook[0]][i] === "B") break;
        else if (board[rook[0]][i] === "p") {
            attacks++;
            break;
        }
    }

    // Down
    for (let i = rook[1]; i < n; i++) {
        if (board[rook[0]][i] === "B") break;
        else if (board[rook[0]][i] === "p") {
            attacks++;
            break;
        }
    }

    // Left
    for (let i = rook[0]; i >= 0; i--) {
        if (board[i][rook[1]] === "B") break;
        else if (board[i][rook[1]] === "p") {
            attacks++;
            break;
        }
    }

    // Right
    for (let i = rook[0]; i < n; i++) {
        if (board[i][rook[1]] === "B") break;
        else if (board[i][rook[1]] === "p") {
            attacks++;
            break;
        }
    }

    return attacks;
};
