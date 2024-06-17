class Solution:
    def sortSentence(self, s: str) -> str:
        stc, m = [], {}
        s = s.split(" ")

        for w in s:
            m[w[-1]] = w[:-1]
        for _, w in sorted(m.items()):
            stc.append(w)
        return " ".join(stc)
