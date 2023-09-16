const moveZeros = (nums) => {
    let left = 0;
    let right = left + 1;

    while(right <= nums.length - 1) {
        if(nums[left]) {
            left++, right++;
        } else {
            if(nums[right]) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right++;

        }
    }
}