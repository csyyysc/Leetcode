class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        cnt = 0

        for i in range(0, len(s) - 2):
            u_sub = set(s[i : i + 3])
            if len(u_sub) == 3:
                cnt += 1

        return cnt
