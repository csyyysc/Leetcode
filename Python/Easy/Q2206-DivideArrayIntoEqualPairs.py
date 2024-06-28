class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        m = {}
        for n in nums:
            m[n] = m.get(n, 0) + 1

        return all(value % 2 == 0 for value in m.values())
