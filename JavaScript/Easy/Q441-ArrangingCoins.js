/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1, count = 0, tmp = n;
    while(tmp > 0) {
        tmp = tmp - i;
        if(tmp < 0) break;
        i++;
        count++;
    }
    return count;
};

const arrangeCoins = (n) => {
    let stairs = 0;
    while(stairs <= n) {
        n -= stairs;
        stairs++;
    }
    return stairs - 1;
};