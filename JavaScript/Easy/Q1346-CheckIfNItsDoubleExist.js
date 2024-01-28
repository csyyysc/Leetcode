/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < 0 && arr[j] < 0 && arr[i] === arr[j] * 2) return true;
            else if (arr[i] * 2 === arr[j]) return true;
        }
    }

    return false;
};

const checkIfExist = (arr) => {
    arr = arr.sort((a, b) => a - b);
    const map = new Map();

    for (const num of arr) {
        if (map.has(num)) return true;
        map.set(num * 2);
        map.set(num / 2);
    }

    return false;
};
