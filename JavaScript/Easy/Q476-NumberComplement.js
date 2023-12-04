/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let mask = 1;
    while(mask < num) mask = (mask << 1) | 1;
    return num ^ mask;
}

function findComplement(num) {
    return parseInt(num.toString(2).split('').map(digit => +!+digit).join(''),2);
}