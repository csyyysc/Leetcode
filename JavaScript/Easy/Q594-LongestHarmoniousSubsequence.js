/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let len = 0, map = {};

    for(const num of nums)
        map[num] = ~~map[num] + 1;
    for(const num in nums) 
        if(map[+num+1])
            len = Math.max(len, map[num] + map[+num+1]);
    return len;
}

