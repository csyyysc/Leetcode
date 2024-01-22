/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr = arr.sort((a, b) => a - b);

    let min = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        min = Math.min(min, diff);
    }

    const mads = [];
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        if (min === diff) mads.push([arr[i], arr[i + 1]]);
    }

    return mads;
};

function minimumAbsDifference(arr) {
    let min = Infinity;
    const mads = [];

    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        if (diff < min) {
            min = diff;
            mads.length = 0;
            mads.push([arr[i], arr[i + 1]]);
        } else if (min === diff) mads.push([arr[i], arr[i + 1]]);
    }

    return mads;
}
