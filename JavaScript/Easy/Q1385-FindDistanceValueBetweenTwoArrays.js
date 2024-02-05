/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    arr2.sort((a, b) => a - b);

    let total = 0;

    for (let i = 0; i < arr1.length; i++) {
        const meet = arr2.every((el) => Math.abs(arr1[i] - el) > d);
        if (meet) total++;
    }

    return total;
};

const findTheDistanceValue = (arr1, arr2, d) => {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let l = 0,
        r = 0,
        count = 0;
    for (let i = 0; i < arr1.length; i++) {
        while (arr2[l] < arr1[i] - d) l++;
        while (arr2[r] <= arr1[i] + d) r++;
        count += r === l;
    }
    return count;
};
