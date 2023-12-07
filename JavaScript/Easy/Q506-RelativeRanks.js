/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const ranks = new MaxPriorityQueue();

    for(let i = 0; i < score.length; i++) 
        ranks.enqueue(i, score[i]);

    for(let i = 0; i < score.length; i++) {
        let rank;
        const item = ranks.dequeue();

        switch(i) {
            case 0:
                rank = "Gold Medal";
                break;
            case 1:
                rank = "Silver Medal";
                break;
            case 2:
                rank = "Bronze Medal";
                break;
            default:
                rank = (i + 1).toString();
        }
        score[item.element] = rank;
    }
    return score;
}

const findRelativeRanks = (score) => {
    const hash = new Map();
    const scores = [...score].sort((a, b) => b - a);

    for(let i = 0; i < scores.length; i++) 
        hash.set(scores[i], i);

    for (let i = 0; i < score.length; i++) {
        score[i] = `${hash.get(score[i]) + 1}`

        if (score[i] === "1") {
            score[i] = "Gold Medal"
        } else if (score[i] === "2") {
            score[i] = "Silver Medal"
        } else if (score[i] === "3") {
            score[i] = "Bronze Medal"
        }
    }
    return score;
}