import math

class Solution:
    def isPrime(self, num: int) -> bool:
        if num < 2:
            return False
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                return False
        return True
    def maximumPrimeDifference(self, nums: List[int]) -> int:
        ls = []
        for index, num in enumerate(nums):
            if(self.isPrime(num)):
                ls.append(index)
        return max(ls) - min(ls)