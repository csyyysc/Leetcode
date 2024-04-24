/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let count = 0;

    /**
     * Combine the strs array into a single string
     */
    let str = "";
    for (let i = 0; i < strs.length; i++) {
        str += strs[i];
    }

    /**
     * Loop over the rows
     */
    let k = 0;
    const cols = strs[0].length;
    while (k < cols) {
        // Because the strings are same length, it would be fine to iterate over string length to check
        for (let j = k; j < str.length; j += cols) {
            if (str[j] > str[j + cols]) {
                count++;
                break;
            }
        }
        k++;
    }

    return count;
};
