class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        n = len(nums)
        nums = sorted(nums, reverse=True)

        min_d = float('inf')
        for i in range(n - k + 1):
            slide_window = nums[i:i+k]
            max_d_slide = max(slide_window)
            min_d_slide = min(slide_window)
            min_d = min(min_d, max_d_slide - min_d_slide)
        return min_d
    
    def minimumDifferenceOptimized(self, nums: List[int], k: int) -> int:
        if k == 1:
            return 0

        nums = sorted(nums, reverse=True)
        min_d = float("inf")

        for i in range(len(nums) - k + 1):
            min_d = min(min_d, nums[i] - nums[i + k - 1])

        return min_d