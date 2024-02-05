/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    const groups = new Array(9).fill(0).map(() => []);

    function digitSum(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    for (let i = 1; i <= n; i++) {
        let digits = digitSum(i) - 1;
        if (groups[digits]) groups[digits].push(i);
        else groups[digits] = [i];
    }

    let max = 0;
    for (const g of groups) {
        max = Math.max(max, g.length);
    }

    return groups.filter((g) => g && g.length === max).length;
};
