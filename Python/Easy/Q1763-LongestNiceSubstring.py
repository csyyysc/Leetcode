class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        lns = ""
        n = len(s)
        strs = []

        for i in range(n):
            for j in range(i + 1, n + 1):
                strs.append(s[i:j])

        for w in strs:
            valid = True
            for j in range(len(w)):
                if w[j].upper() not in w or w[j].lower() not in w:
                    valid = False
                    break
            if valid:
                lns = w if len(w) > len(lns) else lns
        return lns
