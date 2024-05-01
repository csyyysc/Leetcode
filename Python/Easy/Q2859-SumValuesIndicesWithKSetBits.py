class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        s = 0

        for i in range(0, len(nums)):
            s_bits = sum(+1 if b == "1" else +0 for b in bin(i))
            if s_bits == k:
                s += nums[i]
        return s

    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        s = 0

        for i in range(0, len(nums)):
            s_bits = bin(i).count('1')
            if s_bits == k:
                s += nums[i]
        return s
