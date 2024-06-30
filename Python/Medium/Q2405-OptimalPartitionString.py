class Solution:
    def partitionString(self, s: str) -> int:
        cnt = 1
        m = {}

        for c in s:
            if c not in m:
                m[c] = m.get(c, 0) + 1
            else:
                cnt += 1
                m.clear()
                m[c] = m.get(c, 0) + 1
        return cnt
