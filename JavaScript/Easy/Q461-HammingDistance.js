/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let hamming = 0;
    x = x.toString(2), y = y.toString(2);

    if(x.length > y.length) y = y.padStart(x.length, '0');
    else x = x.padStart(y.length, '0');

    for(let i = 0; i < x.length; i++) {
        if(x[i] !== y[i]) hamming++;
    }
    return hamming;
}

function hammingDistance(x, y) {
    let hamming = 0;
    let value = x ^ y;
    
    while(value) {
        if(value & 1) hamming++;
        value = value >> 1;
    }
    return hamming;
}