class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        bit = 0
        for n in nums:
            bit ^= n
        return bin(k ^ bit).count('1')
