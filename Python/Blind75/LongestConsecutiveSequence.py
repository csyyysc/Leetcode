class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        nums = sorted(list(set(nums)))
        lcs = 1
        cnt = 1
        for i in range(1, len(nums)):
            if (nums[i] - nums[i - 1]) == 1:
                cnt += 1
            else:
                cnt = 1
            lcs = max(lcs, cnt)
        return lcs
