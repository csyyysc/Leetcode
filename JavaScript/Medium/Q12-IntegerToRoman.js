/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const map = [
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]];

    let str = "";
    for (let i = map.length - 1; i >= 0; i--) {
        while (num >= map[i][1]) {
            const head = num.toString()[0]
            if (+head === 4) {
                str += map[i][0] + map[i + 1][0];
                num -= map[i + 1][1] - map[i][1];
            } else if (+head === 9) {
                str += map[i - 1][0] + map[i + 1][0];
                num -= map[i + 1][1] - map[i - 1][1];
            } else {
                str += map[i][0];
                num -= map[i][1];
            }
        }
    }

    return str;
};
