class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        m = {}
        cnt = 0

        for n in nums:
            if n in m:
                m[n] += 1
            else:
                m[n] = 1
        mf = max(m.values())

        for v in m.values():
            if mf == v:
                cnt += v
        return cnt
