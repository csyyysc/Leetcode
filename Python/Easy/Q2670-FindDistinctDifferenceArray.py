class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        dd = []
        n = len(nums)
        pre, suf = 0, 0
        for i in range(n):
            pre = len(set(nums[: i + 1]))
            suf = len(set(nums[i + 1 :]))
            dd.append(pre - suf)
        return dd
