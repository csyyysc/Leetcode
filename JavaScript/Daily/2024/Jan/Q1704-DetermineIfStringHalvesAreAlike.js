/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let len = s.length;
    let leftV = 0,
        rightV = 0;
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    let [s1, s2] = [s.substring(0, len / 2), s.substring(len / 2, len)];
    for (let i = 0; i < len / 2; i++) {
        if (vowels.includes(s1[i])) leftV++;
        if (vowels.includes(s2[i])) rightV++;
    }

    return leftV === rightV;
};
