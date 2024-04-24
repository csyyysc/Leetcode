/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    const map = {};

    for (const num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    const maxFreq = Math.max(...Object.values(map));
    for (const key in map) {
        if (map[key] === maxFreq) return key;
    }
};

const findSpecialInteger = (arr) => {
    const n = arr.length,
        maxCnt = Math.floor(n / 4);

    for (let i = 0; i < n - maxCnt; i++) {
        if (arr[i] === arr[i + maxCnt]) return arr[i];
    }
    return -1;
};
