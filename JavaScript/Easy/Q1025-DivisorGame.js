/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
    let flag = true;
    while (n) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                n = n - i;
                break;
            }
        }

        flag = !flag;
    }

    return flag;
};

const divisorGame = (n) => n % 2 === 0;
