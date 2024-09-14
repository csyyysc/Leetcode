class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        m = max(nums)
        l, curr_l = 0, 0

        for num in nums:
            if num == m:
                curr_l += 1
                l = max(l, curr_l)
            else:
                curr_l = 0
        return l
