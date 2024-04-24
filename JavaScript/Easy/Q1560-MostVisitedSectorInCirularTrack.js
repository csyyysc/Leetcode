/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
    const map = {};
    const len = rounds.length;

    for (let i = 0, j = i + 1; i < len, j < len; i++, j++) {
        let s = rounds[i];
        let e = rounds[i + 1];

        if (j === len - 1) {
            move(s, e, true);
        } else {
            move(s, e, false);
        }
    }

    function move(s, e, final) {
        if (!final) {
            while (s < e) {
                map[s] = (map[s] || 0) + 1;
                s++;
            }
            let reset = false;
            while ((s > e && !reset) || (s < e && reset)) {
                map[s] = (map[s] || 0) + 1;
                if (s === n) (s = 1), (reset = true);
                else s++;
            }
        } else {
            if (s < e) {
                while (s <= e) {
                    map[s] = (map[s] || 0) + 1;
                    s++;
                }
            } else {
                let reset = false;
                while ((s > e && !reset) || (s <= e && reset)) {
                    map[s] = (map[s] || 0) + 1;
                    if (s === n) (s = 1), (reset = true);
                    else s++;
                }
            }
        }
    }

    const mostVis = [];
    const maxFreq = Math.max(...Object.values(map));
    for (const key in map) {
        if (map[key] === maxFreq) mostVis.push(key);
    }

    return mostVis;
};
