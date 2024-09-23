class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        nums = sorted(nums, reverse=True)

        for i in range(len(nums)):
            left = nums[:i+1]
            right = nums[i+1:]
            if sum(left) > sum(right):
                return left
        return []