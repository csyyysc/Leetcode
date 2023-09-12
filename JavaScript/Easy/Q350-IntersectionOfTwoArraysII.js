/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const nums = [];
    const map1 = new Map(), map2 = new Map();
    const [shortNums, longNums] = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];

    for(let i = 0; i < shortNums.length; i++) {
        if(!map1.has(shortNums[i])) map1.set(shortNums[i], 1);
        else map1.set(shortNums[i], map1.get(shortNums[i]) + 1);
    }

    for(let i = 0; i < longNums.length; i++) {
        if(!map2.has(longNums[i])) map2.set(longNums[i], 1);
        else map2.set(longNums[i], map2.get(longNums[i]) + 1);
    }

    map2.forEach((value, key) => {
        if(map1.has(key)) {
            let times = map1.get(key) > value ? value : map1.get(key);
            for(let i = 0; i < times; i++) nums.push(key);
        } 
    })

    return nums;
};


const intersect = (nums1, nums2, nums = []) => {
    const map = new Map();

    for(const n of nums1)
        map.set(n, (map.get(n) || 0) + 1);
    for(const m of nums2) 
        if(map.get(m) > 0) {
            nums.push(m);
            map.set(m, map.get(m) - 1);
        }
    return nums;
}