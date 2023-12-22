/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let nums = [];
    for(let i = 0; i < operations.length; i++) {
        switch(operations[i]) {
            case 'C':
                nums.pop();
                break;
            case 'D':
                nums.push(nums[nums.length - 1] * 2);
                break;
            case '+':
                let len = nums.length;
                nums.push(nums[len - 1] + nums[len - 2]);
                break;
            default:
                nums.push(+operations[i]);
                break;
        }
    }
    return nums.reduce((sum, cur) => sum + cur, 0);
};