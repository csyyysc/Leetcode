/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let max = 0;

    function isUnique(str) {
        let bits = 1 << 26; // Math.pow(2, 26)
        for (const c of str) {
            const index = c.charCodeAt(0) - 97;
            if (bits & (1 << index)) return false;
            /**
             * Bitwise OR
             * 5 = 0101
             * 3 = 0011
             * 5 | 3 = 0111 => 7
             */
            bits |= 1 << index;
        }

        return true;
    }

    // Backtrack
    function getMax(index, prev) {
        max = Math.max(max, prev.length);

        if (index === arr.length) return;

        for (let i = index; i < arr.length; i++) {
            const newStr = prev + "" + arr[i];
            if (isUnique(newStr)) getMax(index + 1, newStr);
        }
    }

    getMax(0, "");

    return max;
};
