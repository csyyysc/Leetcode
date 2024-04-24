/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let sum = 0;
    const map = {};

    for (const num of nums) map[num] = (map[num] || 0) + 1;
    for (const key in map) map[key] === 1 ? (sum += parseInt(key)) : sum;

    return sum;
};

const sumOfUnique = (nums) => {
    let sum = 0;
    const set = new Set(nums);

    for (const num of nums) {
        if (set.has(num)) {
            sum += num;
            set.delete(num);
        } else {
            const check = set.has(-num);
            if (check === false) {
                sum -= num;
                set.add(-num);
            }
        }
    }

    return sum;
};
