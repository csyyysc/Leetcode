/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    s = s.split("");

    let left = 0,
        right = s.length - 1;
    const regex = /[a-zA-Z]/g;

    while (left < right) {
        /**
         * match() return null means not found
         */
        if (s[left].match(regex) === null) {
            left++;
            continue;
        }
        if (s[right].match(regex) === null) {
            right--;
            continue;
        }
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s.join("");
};
