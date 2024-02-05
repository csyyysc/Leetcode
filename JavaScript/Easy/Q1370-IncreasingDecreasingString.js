/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let result = "",
        increasing = true;
    const map = {};
    for (const c of s) map[c] = (map[c] || 0) + 1;

    while (result.length < s.length) {
        let str = "";
        if (increasing) {
            for (let i = 0; i < 26; i++) {
                const c = String.fromCharCode("a".charCodeAt(0) + i);
                if (map[c] && map[c] > 0) {
                    str += c;
                    map[c]--;
                }
            }
        } else {
            for (let i = 25; i >= 0; i--) {
                const c = String.fromCharCode("a".charCodeAt(0) + i);
                if (map[c] && map[c] > 0) {
                    str += c;
                    map[c]--;
                }
            }
        }
        result += str;
        increasing = !increasing;
    }

    return result;
};

const sortString = (s) => {
    let ans = "";
    const map = new Array(26).fill(0);

    for (const c of s) {
        const code = c.charCodeAt(0) - 97; // Mapping using index
        map[code]++;
    }

    function append(i) {
        const char = String.fromCharCode(i + 97); // Convert back to char
        ans += char;
        map[i]--;
    }

    while (ans.length !== s.length) {
        for (let i = 0; i < map.length; i++) {
            if (!map[i]) continue;
            append(i);
        }

        for (let i = map.length - 1; i >= 0; i--) {
            if (!map[i]) continue;
            append(i);
        }
    }

    return ans;
};
