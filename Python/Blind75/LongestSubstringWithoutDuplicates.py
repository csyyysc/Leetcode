class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        m = {}
        lsm, pivot = 0, 0

        for idx, char in enumerate(s):
            if char in m:
                pivot = max(pivot, m[char] + 1)
            m[char] = idx
            lsm = max(lsm, idx - pivot + 1)
        return lsm
