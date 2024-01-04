/**
 * @param {number[]} alice
 * @param {number[]} bob
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const sumA = A.reduce((sum, cur) => sum + cur, 0);
    const sumB = B.reduce((sum, cur) => sum + cur, 0);
    const diff = (sumA - sumB) >> 1;
    const setA = new Set(A);

    for(const candy of B) {
        if(setA.has(candy + diff)) return [candy + diff, candy];
    }
}