/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const greatest = [];

    for (let i = 0; i < candies.length; i++) {
        const candy = candies[i] + extraCandies;
        const leftCandies = [...candies];
        leftCandies.splice(i, 1);
        if (candy >= Math.max(...leftCandies)) greatest.push(true);
        else greatest.push(false);
    }

    return greatest;
};
