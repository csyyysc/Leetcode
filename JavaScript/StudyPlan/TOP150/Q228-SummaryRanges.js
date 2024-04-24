/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let index = 0;
    const ranges = [];

    while(index < nums.length) {
        let beg = nums[index], last;

        while(index + 1 < nums.length && nums[index + 1] < nums[index] + 1) index++;
        last = nums[index];
        if(beg === last) {
            ranges.push(`${beg}`);
        } else {
            ranges.push(beg + "->" + last);
        }
        index++;
    }
    return ranges;
}