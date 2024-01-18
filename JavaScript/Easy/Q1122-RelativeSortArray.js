/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const rel = [];

    for (let i = 0; i < arr2.length; i++) {
        rel.push(...arr1.filter((el) => el === arr2[i]));
        arr1 = arr1.filter((el) => el !== arr2[i]);
    }

    rel.push(...arr1.sort((a, b) => a - b));

    return rel;
};

const relativeSortArray = (arr1, arr2) => {
    const N = arr2.length;
    const table = new Map();

    arr2.forEach((el, i) => table.set(el, i));

    return arr1.sort((a, b) => {
        a = table.has(a) ? table.get(a) : N + a;
        b = table.has(b) ? table.get(b) : N + b;
        return a - b;
    });
};
