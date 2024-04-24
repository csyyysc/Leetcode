/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    const nums3 = [...nums1];
    nums1.length = 0;

    let i = 0;
    let k = 0;
    while (i < m && k < n) {
        if (nums3[i] < nums2[k]) {
            nums1.push(nums3[i++]);
        } else {
            nums1.push(nums2[k++]);
        }
    }

    while (i < m) {
        nums1.push(nums3[i++]);
    }

    while (k < n) {
        nums1.push(nums2[k++]);
    }

    console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

merge([0], 0, [1], 1);

merge([2, 0], 1, [1], 1);
