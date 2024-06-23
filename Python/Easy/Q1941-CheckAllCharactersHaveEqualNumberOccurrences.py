class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        m = {}

        for c in s:
            m[c] = m.get(c, 1) + 1
        m = list(m.values())
        return all(v == m[0] for v in m)
