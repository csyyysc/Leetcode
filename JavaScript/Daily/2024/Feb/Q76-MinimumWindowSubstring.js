/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (!s || !t) return "";

    const dictT = new Map();
    const windowCounts = new Map();

    let required = dictT.size;
    let l = 0,
        r = 0,
        formed = 0;
    let ans = [-1, 0, 0];

    while (r < s.length) {
        const charR = s.charAt(r);

        windowCounts.set(charR, (windowCounts.get(charR) || 0) + 1);
        if (dictT.has(charR) && windowCounts.get(charR) === dictT.get(charR)) formed++;

        while (l <= r && formed === required) {
            const charL = s.charAt(l);

            if (ans[0] === -1 || r - l + 1 < ans[0]) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            windowCounts.set(charL, windowCounts.get(charL) - 1);
            if (dictT.has(charL) && windowCounts.get(charL) < dictT.get(charL)) formed--;
            l++;
        }
        r++;
    }
    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};
