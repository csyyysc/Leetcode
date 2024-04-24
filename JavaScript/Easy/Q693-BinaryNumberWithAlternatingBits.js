/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const bits = n.toString(2);
    for(let i = 0; i < bits.length; i++) {
        if(bits[i] === bits[i + 1]) return false;
    }
    return true;
};

const hasAlternatingBits = (n) => {
    let prevb = null;
    
    while(n) {
        let currb = n & 1;
        if(prevb === currb) return false;
        prevb = currb;
        n >>= 1;
    }
    return true;
}