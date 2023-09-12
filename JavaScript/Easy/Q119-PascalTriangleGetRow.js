/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const targetRow = [];

    for(let i = 0; i <= rowIndex; i++) {
        targetRow.push(comb(rowIndex, i));
    }
    return targetRow;
};

const comb = (u, l) => {
    let num = 1, den = 1;

    if(u === l || l === 0) return 1;

    while(l != 0) {
        num *= u;
        den *= l; 
        u--, l--;
    }

    return num / den;
}