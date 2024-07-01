class Solution:
    def greatestLetter(self, s: str) -> str:
        s = sorted(set(s), reverse=True)

        for c in s:
            if c.upper() in s and c.lower() in s:
                return c.upper()
        return ""
