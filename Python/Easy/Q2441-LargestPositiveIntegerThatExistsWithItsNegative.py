class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums = sorted(nums)

        for n in nums[::-1]:
            if -n in nums:
                return n

        return -1
