/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let i = 0,
        sum = 0,
        weeks = Math.floor(n / 7);
    const currency = new Array(n).fill(0).map((_, index) => index + 1);

    while (i <= weeks) {
        if (i === weeks) {
            sum += currency.slice(i, i + (n - weeks * 7)).reduce((sum, cur) => sum + cur, 0);
        } else {
            sum += currency.slice(i, i + 7).reduce((sum, cur) => sum + cur, 0);
        }
        i++;
    }

    return sum;
};

// const totalMoney = (n) => {
//     let day = 1,
//         week = 0,
//         balance = 0;

//     for (let i = 1; i <= n; i++) {
//         balance += day + week;
//         day++;
//         if (i % 7 === 0) {
//             day = 1;
//             week++;
//         }
//     }

//     return balance;
// };
