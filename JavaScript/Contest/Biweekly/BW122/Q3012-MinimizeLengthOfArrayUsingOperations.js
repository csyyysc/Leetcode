/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumArrayLength = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    if (n > 2 && nums[0] !== nums[1]) return 1;

    function getGCD(a, b) {
        while (b) {
            let tmp = b;
            b = a % b;
            a = tmp;
        }
        return a;
    }

    let gcd = nums[0],
        cnt = 0;
    nums.forEach((num) => (gcd = getGCD(gcd, num)));
    nums.forEach((num) => gcd === num && cnt++);
    return Math.max(1, Math.floor((cnt + 1) / 2));
};

const minimumArrayLength = (nums) => {
    let min = Math.min(...nums);

    for (const num of nums) {
        if (num % min) return 1;
    }

    let cnt = 0;
    for (const num of nums) {
        if (num === min) cnt++;
    }

    return Math.floor((cnt + 1) / 2);
};

const minimumArrayLength = (nums) => {
    let min = Math.min(...nums);

    for (const num of nums) {
        if (num % min) return 1;
    }

    let cnt = 0;
    for (const num of nums) {
        if (num === min) cnt++;
    }

    return Math.floor((cnt + 1) / 2);
};
