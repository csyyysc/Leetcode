/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }

        return true;
    }

    let primes = 0,
        nonPrimes = 0,
        ans = 1;
    const mod = 10 ** 9 + 7;

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) ans *= ++primes;
        else ans *= ++nonPrimes;
        ans = ans % mod;
    }

    return ans;
};
