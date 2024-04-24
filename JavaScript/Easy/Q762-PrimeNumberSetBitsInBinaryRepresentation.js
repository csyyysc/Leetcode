/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    const isPrime = (num) => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    let count = 0;
    const bits = [];
    for (let num = left; num <= right; num++) {
        bits.push(num.toString(2));
    }

    for (let i = 0; i < bits.length; i++) {
        let sets = 0;
        for (let j = 0; j < bits[i].length; j++) if (bits[i][j] === "1") sets++;
        if (isPrime(sets)) count++;
    }
    return count;
};

const countPrimeSetBits = (L, R, total = 0) => {
    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }

    function countBits(num) {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }

    for (let num = L; num <= R; num++) {
        if (isPrime(countBits(num))) total++;
    }
    return total;
};
