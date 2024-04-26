class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        rs = ''.join(reversed(s))
        for i in range(0, len(s) - 1):
            sub = s[i : i + 2]
            if sub in rs:
                return True
        return False

    def isSubstringPresent(self, s: str) -> bool:
        rs = s[::-1]
        for i in range(1, len(s)):
            if s[i - 1 : i + 1] in rs:
                return True
        return False