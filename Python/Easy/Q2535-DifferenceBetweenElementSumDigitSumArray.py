class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        els = sum(+el for el in nums)
        dis = 0

        for num in nums:
            for d in str(num):
                dis += int(d)

        return abs(els - dis)
    
    def differenceOfSum(self, nums: List[int]) -> int:
        els = sum(nums)
        dis = sum(int(d) for num in nums for d in str(num))

        return abs(els - dis)