/**
 * @param {character[][]} board
 * @return {boolean}
 */

// var isValidSudoku = function (board) {
//     function validator(series) {
//         const set = new Set();
//         for (let i = 0; i < series.length; i++) {
//             if (series[i] !== '.') set.add(series[i]);
//         }

//         return set.size === series.filter(item => item !== '.').length;
//     }

//     for (let i = 0; i < board.length; i++) {
//         if (!validator(board[i])) return false;
//     }

//     const boardColumns = new Array(board.length)
//         .fill(null).map(() => new Array(board.length).fill(null));

//     for (let j = 0; j < board.length; j++) {
//         for (let k = 0; k < board.length; k++) {
//             boardColumns[j][k] = board[k][j];
//         }
//     }

//     for (let i = 0; i < boardColumns.length; i++) {
//         if (!validator(boardColumns[i])) return false;
//     }

//     return true;
// };

var isValidSudoku = function (board) {
    for(let i = 0; i < board.length; i++) {
        const row = new Set(),
        col = new Set(),
        box = new Set();

        for(let j = 0; j < board.length; j++) {
            const _row = board[i][j],
                _col = board[j][i],
                _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
            
            if(_row !== '.') {
                if(row.has(_row)) return false;
                row.add(_row);
            }

            if(_col !== '.') {
                if(col.has(_col)) return false;
                col.add(_col);
            }

            if(_box !== '.') {
                if(box.has(_box)) return false;
                box.add(_box);
            }
        }
    }
    return true;
};
