class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)

        for i in range(n):
            l_nums = nums[:i]
            r_nums = nums[i+1:]

            if sum(l_nums) == sum(r_nums):
                return i

        return -1
    
    def pivotIndexOptimized(self, nums: List[int]) -> int:
        n = len(nums)
        total = sum(nums)

        prefix = 0
        for i in range(n):
            suffix = total - nums[i] - prefix

            if prefix == suffix:
                return i
            prefix += nums[i]

        return -1
    