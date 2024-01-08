/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (nums) {
    if (nums.length < 3) return false;

    let pivot = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums[i + 1]) {
            pivot = i;
            break;
        }
    }

    function isIncreasingMonotonic(nums) {
        let increasing = true;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= nums[i + 1]) increasing = false;
        }

        return increasing;
    }

    function isDecreasingMonotonic(nums) {
        let decreasing = true;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= nums[i + 1]) decreasing = false;
        }

        return decreasing;
    }

    return (
        !!pivot && isIncreasingMonotonic(nums.slice(0, pivot)) && isDecreasingMonotonic(nums.slice(pivot, nums.length))
    );
};

const validMountainArray = (nums) => {
    if (nums.length < 3) return false;

    const n = nums.length;
    let left = 0,
        right = n - 1;

    while (left + 1 < n - 1 && nums[left + 1] > nums[left]) left++;
    while (right - 1 > 0 && nums[right - 1] > nums[right]) right--;

    return left === right ? true : false;
};
