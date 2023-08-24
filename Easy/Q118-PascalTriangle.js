/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascalArray = [];

    for(let i = 0; i < numRows; i++) {
        const floor = [];
        for(let j = 0; j <= i; j++) {
            floor.push(comb(i, j));
        }
        pascalArray.push(floor);
    }

    return pascalArray;
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