/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const instruction = candyType.length / 2;

    const candies = new Set();
    for(let i = 0; i < candyType.length; i++) {
        if(!candies.has(candyType[i]) && candies.size < instruction) {
            candies.add(candyType[i]);
        }
    }
    return candies.size;
};

const distributeCandies = (candyType) => Math.min(new Set(candyType).size, candyType.length / 2);