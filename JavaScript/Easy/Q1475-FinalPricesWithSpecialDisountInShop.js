/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const n = prices.length;
    const discounts = [];

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i !== j && prices[i] >= prices[j]) {
                discounts.push(prices[i] - prices[j]);
                break;
            }
            if (j === n - 1) discounts.push(prices[i]);
        }
    }

    return discounts;
};
