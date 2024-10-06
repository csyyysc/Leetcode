import itertools

class Solution:
    def maxGoodNumber(self, nums: List[int]) -> int:
        m_num = 0

        nums = [bin(num)[2:] for num in nums]
        permus = list(permutations(nums, 3))

        for p in permus:
            concat_b = ""
            for b in p:
                concat_b += b
            m_num = max(m_num, int(concat_b, 2))

        return m_num