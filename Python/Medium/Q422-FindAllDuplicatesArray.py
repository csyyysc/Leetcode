class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        m = {}

        for n in nums:
            m[n] = m.get(n, 0) + 1

        return [k for k, v in m.items() if v == 2]
