/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true;

    for(let i = 1; i < num; i++) {
        if(num === i * i) return true;
    }
    return false;
};

const isPerfectSquare = (num) => {
    return num ** 0.5 % 1 === 0;
}

/**
 * @note Taylor Series
 */
const isPerfectSquare = (num) => {
    let i = 1;
    while(num > 0) {
        num -= i;
        i += 2;
    }
    return num === 0;
}