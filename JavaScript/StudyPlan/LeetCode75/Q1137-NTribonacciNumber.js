/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function (n) {
    if(tribonacciTable[n] !== undefined) return tribonacciTable[n];
    return tribonacciTable[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
};

const tribonacciTable = {
    0: 0,
    1: 1,
    2: 1
};

const tribonacci = (n) => {
    if(n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }

    let arr = [0, 1, 1];
    let num = 0;

    for(let i = 3; i <= n; i++) {
        num = arr[0] + arr[1] + arr[2];
        arr.shift();
        arr.push(num);
    }
    return num;
}