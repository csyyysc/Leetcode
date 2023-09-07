/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const intersection = [];

    /**
     * @note remove the duplicates from both arrays
     */
    nums1 = [...new Set(nums1)].sort();
    nums2 = [...new Set(nums2)].sort();
    const numsOneLen = nums1.length;
    const numsTwoLen = nums2.length;
    const [shortNums, longNums] = numsOneLen > numsTwoLen ? [nums2, nums1] : [nums1, nums2];
    let shortLen = numsOneLen > numsTwoLen ? numsTwoLen : numsOneLen;

    while(shortLen) {
        if(longNums.includes(shortNums[shortLen - 1])) {
            intersection.push(shortNums[shortLen - 1]);
        } 
        shortLen--;
    }
    
    return intersection;
};

const intersection = (nums1, nums2) => {
    const map = new Map();

    for(const num of nums1) {
        if(!map.has(num)) map.set(num, 1);
    }

    return nums2.filter(n => {
        if(map.has(n)) {
            map.delete(n);
            return true;
        }
        else return false;
    })
}

const intersection = (nums1, nums2) => {
    const numsOneSet = new Set(nums1);
    return [...new Set(nums2.filter(num => numsOneSet.has(num)))];
}