class Solution:
    def repeatedCharacter(self, s: str) -> str:
        m = {}

        for c in s:
            m[c] = m.get(c, 0) + 1
            if m[c] == 2:
                return c
        return None
