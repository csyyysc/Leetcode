/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num === 0) return "0";
    if(num < 0) {
        num = num + Math.pow(2, 32);
    }

    let hex = "";
    while(num > 0) {
        let digit = num % 16;
        digit < 10 ? hex += String.fromCharCode(48 + num % 16): hex += String.fromCharCode(87 + num % 16);
        num = Math.floor(num / 16);
    }
    return hex.split('').reverse().join('');
};

const toHex = (num) => {
    const hexs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    if (num == 0) return "0";
    
    if (num < 0) {
        num += Math.pow(2,32);
    }
    let hex = "";
    
    while(num > 0) {
        var digit = num % 16;
        hex = hexs[digit] + hex;
        num = Math.floor(num / 16);
    }
    return hex;
};