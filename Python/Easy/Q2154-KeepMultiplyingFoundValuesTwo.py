class Solution:
    def findFinalValue(self, nums: List[int], original: int) -> int:
        ans = original
        nums = sorted(nums)

        while True:
            if ans in nums:
                ans *= 2
            else:
                break

        return ans
