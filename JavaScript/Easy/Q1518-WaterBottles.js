/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let drinks = numBottles;

    while (numBottles >= numExchange) {
        const exchanges = Math.floor(numBottles / numExchange);
        numBottles = exchanges + (numBottles % numExchange);
        drinks += exchanges;
    }

    return drinks;
};
