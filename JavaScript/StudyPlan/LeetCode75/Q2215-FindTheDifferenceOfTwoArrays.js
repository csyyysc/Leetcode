/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const numOnes = [];
    const numTwos = [];
    for(let i = 0; i < nums1.length; i++) {
        if(!nums2.includes(nums1[i])) numOnes.push(nums1[i]);
    }
    for(let j = 0; j < nums2.length; j++) {
        if(!nums1.includes(nums2[j])) numTwos.push(nums2[j]);
    }

    return [Array.from(new Set(numOnes)), Array.from(new Set(numTwos))];
};

const findDifference = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    nums2.forEach(n => set1.delete(n));
    nums1.forEach(n => set2.delete(n))
    return [[...set1],[...set2]];
}