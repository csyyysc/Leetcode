/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatestCandies = [];
    for(let i = 0; i < candies.length; i++) {
        Math.max(...candies) <= candies[i] + extraCandies ? 
            greatestCandies.push(true) : greatestCandies.push(false);  
    }

    return greatestCandies;
};

const kidsWithCandies = (candies, extraCandies) => {
    const bools = [];
    
    let max = 0;
    for(const candy of candies) {
        candy > max && (max = candy);
    }

    for(let i = 0; i < candies.length; i++) {
        bools.push(candies[i] + extraCandies >= max);
    }
    return bools;
}


const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
}

const kidsWithCandies = (candies, extraCandies, max = Math.max(...candies)) => candies.map(candy => candy + extraCandies >= max);

const kidsWithCandies = (candies, extraCandies) => {
    const maxCandies = [...candies].sort((a, b) => +a - b).pop();
    return candies.map(candy => maxCandies <= candy + extraCandies);
}