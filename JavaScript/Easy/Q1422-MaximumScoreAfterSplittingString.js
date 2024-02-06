/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let score = 0;

    for (let i = 1; i < s.length; i++) {
        let left = s.substring(0, i);
        let right = s.substring(i, s.length);

        let lScore = left.replaceAll("1", "").length;
        let rScore = right.replaceAll("0", "").length;
        score = Math.max(score, lScore + rScore);
    }

    return score;
};

const maxScore = (s) => {
    let ans = 0;

    function helper(idx, s) {
        let zeros = 0,
            ones = 0;

        for (let i = 0; i < idx; i++) {
            if (s.charAt(i) === "0") zeros++;
        }

        for (let j = idx; j < s.length; j++) {
            if (s.charAt(j) === "1") zeros++;
        }

        return zeros + ones;
    }

    for (let i = 1; i < s.length; i++) {
        ans = Math.max(ans, helper(i, s));
    }

    return ans;
};
