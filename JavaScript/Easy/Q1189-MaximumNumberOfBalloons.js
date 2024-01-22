/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const map = { b: 0, a: 0, l: 0, o: 0, n: 0 };

    for (const c of text) map[c]++;

    return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n));
};

function maxNumberOfBalloons(text) {
    let count = 0;
    const map = {};
    const balloon = "balloon";

    for (const t of text) map[t] = (map[t] || 0) + 1;

    while (true) {
        for (let i = 0; i < balloon.length; i++) {
            if (map[balloon[i]] > 0) map[balloon[i]]--;
            else return count;
        }
        count++;
    }
}
