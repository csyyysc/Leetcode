/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(!num) return "0";
    
    let base7 = '';
    let temp = Math.abs(num);

    while(temp > 0) {
        base7 = temp % 7 + base7;
        temp = Math.floor(temp / 7);
    }
    return num > 0 ? num : `-${base7}`;
}

const convertToBase7 = (num) => num.toString(7);