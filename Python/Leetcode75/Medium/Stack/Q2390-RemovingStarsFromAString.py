class Solution:
    def removeStars(self, s: str) -> str:
        procs = []

        for i in range(len(s)):
            tar = s[i]
            if tar != '*':
                procs.append(tar)
            else:
                procs.pop()

        return "".join(procs)