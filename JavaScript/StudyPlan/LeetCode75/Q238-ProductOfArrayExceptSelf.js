/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    let lMult = 1;
    let rMult = 1;

    for(let i = nums.length - 1; i >= 0; i--) {
        output[i] = rMult;
        rMult *= nums[i];
    }

    for(let j = 0; j < nums.length; j++) {
        output[j] *= lMult;
        lMult *= nums[j];
    }
    return output;
}


const productExceptSelf = (nums) => {
    const prefix = [];
  
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            prefix[i] = 1;
        } else {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
    }
  
    const suffix = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1) {
            suffix[i] = 1;
        } else {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }
    }
  
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }
    return result;
  }