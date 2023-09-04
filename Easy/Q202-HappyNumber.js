/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const checkedTable = {};

    function isHappyChecker(n) {
        const digits = n.toString().split('');
        let newNums = 0;

        for(let i = 0; i < digits.length; i++) {
            newNums += Math.pow(digits[i], 2);
        }

        if(newNums in checkedTable) return false;

        checkedTable[newNums] = true;
 
        return newNums === 1 ? true : isHappyChecker(newNums);
    }

    return isHappyChecker(n);
};

/**
 * @description Reference Method1
 * @param {number} n
 * @return {boolean}
 */
const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81};

const isHappy = (n) => {
    if(n < 1) return false;

    const numsSet = new Set();
    while(!numsSet.has(n)) {
        numsSet.add(n);
        let s = n.toString();
        n = 0;
        for(let i = 0; i < s.length; i++) {
            n += squares[s[i]];
        }

        if(n === 1) return true;
    }
    return false;
}
