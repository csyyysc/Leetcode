/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    return [...arr.sort((a, b) => a - b)]
        .map((el) => el.toString(2))
        .sort((a, b) => a.replaceAll("0", "").length - b.replaceAll("0", "").length)
        .map((el) => parseInt(el, 2));
};

const sortByBits = (arr) => {
    function counter(num) {
        let count = 0;

        // Bit "AND" Manipulation
        while (num) {
            count++;
            num &= num - 1;
        }

        return count;
    }

    function sorter(a, b) {
        let countA = counter(a);
        let countB = counter(b);

        if (countA === countB) return a - b;
        else return countA - countB;
    }

    return arr.sort(sorter);
};
