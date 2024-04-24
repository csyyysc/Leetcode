/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let count = 0;

    for (let i = 0; i < logs.length; i++) {
        switch (logs[i]) {
            case "../":
                if (count > 0) count--;
                break;
            case "./":
                break;
            default:
                count++;
                break;
        }
    }

    return count;
};
