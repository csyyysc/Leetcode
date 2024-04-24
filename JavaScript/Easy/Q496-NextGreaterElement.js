/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const next = [];

    for(let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        while(index < nums2.length) {
            if(nums1[i] < nums2[index]) {
                next.push(nums2[index]);
                break;
            }
            else if(index === nums2.length - 1) {
                next.push(-1);
                break;
            }
            index++;
        }
    }
    return next;
}

const nextGreaterElement = (nums1, nums2) => {
    const map = new Map();
    const stack = [];

    for(const num of nums2) {
        while(stack.length && stack[stack.length - 1] < num) map.set(stack.pop(), num);
        stack.push(num);
    }
    return nums1.map((num) => map.has(num) ? map.get(num) : -1);
}