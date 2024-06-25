class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        m = {}
        pairs = 0
        left_over = 0

        for n in nums:
            m[n] = m.get(n, 0) + 1

        for val in m.values():
            pairs += val // 2
            if val % 2 == 1:
                left_over += 1

        return [pairs, left_over]
