class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        m = {}

        for word in words:
            for c in word:
                m[c] = m.get(c, 0) + 1
        return all(val % len(words) == 0 for val in m.values())

    def makeEqual(self, words: List[str]) -> bool:
        n = len(words)
        w = "".join(words)
        s = set(w)

        for c in s:
            if w.count(c) % n != 0:
                return False
        return True
