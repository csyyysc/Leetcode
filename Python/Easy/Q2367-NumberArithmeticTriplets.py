from typing import List


class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        cnt = 0
        n = len(nums)

        for i in range(n):
            for j in range(n):
                for k in range(n):
                    if (nums[j] - nums[i]) == diff and (nums[k] - nums[j]) == diff:
                        cnt += 1
        return cnt

    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        dct = dict()

        for n in nums:
            if dct.get(n - diff) is None:
                dct[n] = 0
            elif dct.get(n - diff) == 0:
                dct[n] = 1
            else:
                dct[n] = 2
        return sum([v > 1 for v in dct.values()])
