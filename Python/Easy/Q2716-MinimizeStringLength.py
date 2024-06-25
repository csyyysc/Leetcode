class Solution:
    def minimizedStringLength(self, s: str) -> int:
        m = {}

        for c in s:
            m[c] = m.get(c, 0) + 1

        return len(m.keys())

    def minimizedStringLength(self, s: str) -> int:
        return len(set(s))
