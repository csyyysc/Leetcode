/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    /**
     * m: stores the occurences of each key
     * l: stores the indexes of each key that first occurs
     * r: stores the last index of each key that last occurs
     */
    const m = new Map(),
        left = new Map(),
        right = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (left.get(num) === undefined) left.set(num, i);
        right.set(num, i);
        m.set(num, m.get(num) + 1 || 1);
    }

    /**
     * degree: the maximum frequence of a certain key
     * elems: the keys that have the same occurences with degree
     */
    const degree = Math.max(...Array.from(m.values()));
    const elems = Array.from(m.keys()).filter((num) => m.get(num) === degree);
    
    /**
     * len: The distance between last occurence and first occurence is the smallest possible length
     */
    let len = nums.length;

    for (const elem of elems) {
        len = Math.min(len, right.get(elem) - left.get(elem) + 1);
    }
    return len;
};
