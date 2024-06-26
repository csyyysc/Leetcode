class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        m = set()

        for pair in nums:
            s, e = pair
            for i in range(s, e + 1):
                m.add(i)

        return len(m)
