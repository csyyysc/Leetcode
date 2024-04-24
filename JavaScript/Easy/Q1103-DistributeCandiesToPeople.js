/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    const distributed = new Array(num_people).fill(0);

    let seq = 0,
        round = 1;
    while (candies > 0) {
        const candy = seq + 1 + (round - 1) * num_people;
        if (candies > candy) {
            distributed[seq] += candy;
            candies -= candy;
            seq++;
        } else {
            distributed[seq] += candies;
            candies = 0;
        }

        if (seq === num_people) {
            seq = 0;
            round++;
        }
    }

    return distributed;
};
