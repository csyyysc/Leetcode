/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let matches = 0;

    const rule = {
        type: 0,
        color: 1,
        name: 2,
    };

    for (let i = 0; i < items.length; i++) {
        if (items[i][rule[ruleKey]] === ruleValue) matches++;
    }

    return matches;
};
