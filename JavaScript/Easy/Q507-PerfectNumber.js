/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    const divisors = [];

    for (let i = 1; i < num; i++) if (num % i === 0) divisors.push(i);

    return num === divisors.reduce((prev, cur) => prev + cur, 0);
};

const checkPerfectNumber = (num) => {
    let sum = 0;
    for(let i = 1; i * i < num; i++) {
        if(num % i === 0) {
            sum += i;
            if(num / i !== num && num / i !== i) 
                sum += num / i;
        }
    }
    return sum === num;
}