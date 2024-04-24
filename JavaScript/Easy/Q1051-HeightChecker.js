/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const expected = [...heights].sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) count++;
    }

    return count;
};

const heightChecker = (heights) => {
    const count = new Int8Array(101);

    for (let i = 0; i < heights.length; i++) {
        count[heights[i]]++;
    }

    let res = (idx = 0);
    for (let i = 0; i < 101; i++) {
        while (count[i]--) {
            heights[idx++] !== i && res++;
        }
    }

    return res;
};
