/**
 * @param {number} n
 * @return {number}
 */

const tribonacci = (n) => {
    const tribo = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        tribo.push(tribo[i - 3] + tribo[i - 2] + tribo[i - 1]);
    }

    return tribo[n];
};
