class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        sins = [num for num in nums if num < 10]
        doubs = [num for num in nums if num >= 10]
        return sum(sins) != sum(doubs)