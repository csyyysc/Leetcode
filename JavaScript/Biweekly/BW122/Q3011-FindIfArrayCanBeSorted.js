/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let setA = nums[i].toString(2).replaceAll("0", "");
                let setB = nums[j].toString(2).replaceAll("0", "");
                if (setA.length === setB.length) {
                    let tmp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = tmp;
                } else return false;
            }
        }
    }

    return true;
};
