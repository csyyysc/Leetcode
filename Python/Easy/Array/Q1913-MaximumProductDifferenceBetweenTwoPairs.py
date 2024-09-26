class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        n = len(nums)
        nums = sorted(nums)

        return (nums[n - 1] * nums[n - 2]) - (nums[1] * nums[0])