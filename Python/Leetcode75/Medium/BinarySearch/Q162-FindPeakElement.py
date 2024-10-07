class Solution:
    def findPeakElementTrivial(self, nums: List[int]) -> int:
        return nums.index(max(nums))
    
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        l, r = 0, n - 1

        while l <= r:
            m = l + ((r - l) // 2)

            if m > 0 and nums[m] < nums[m - 1]:
                r = m - 1
            elif m < n - 1 and nums[m] < nums[m + 1]:    
                l = m + 1
            else:
                return m