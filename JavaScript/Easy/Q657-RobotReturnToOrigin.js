/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let map = {};
    for(let i = 0; i < moves.length; i++) {
        map[moves[i]] = map[moves[i]] ? map[moves[i]] + 1 : 1;
    }

    if(map['U'] === map['D'] && map['L'] === map['R']) return true;
    return false;
};

const judgeCircle = (moves) => {
    let x = 0, y = 0;

    for(let i = 0; i < moves.length; i++) {
        switch(moves[i]) { 
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
        }
    }
    return !x && !y;
}