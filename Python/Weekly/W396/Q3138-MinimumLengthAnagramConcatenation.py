class Solution:
    """
    Reference: https://leetcode.com/u/Yawn_Sean/
    """
    def minAnagramLength(self, s: str) -> int:
        n = len(s)
        for i in range(1, n + 1):
            if n % i == 0:
                cnt = Counter(s[:i])
                for j in range(i, n, i):
                    ncnt = Counter(s[j:j+i])
                    if ncnt != cnt: break
                else: return i
