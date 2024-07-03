class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        def backtrack(path):
            nonlocal cnt
            cnt += 1
            for c in m:
                if m[c] > 0:
                    m[c] -= 1
                    backtrack(path + c)
                    m[c] += 1

        cnt = 0
        m = {}

        for t in tiles:
            m[t] = m.get(t, 0) + 1

        for c in m:
            m[c] -= 1
            backtrack(c)
            m[c] += 1

        return cnt
