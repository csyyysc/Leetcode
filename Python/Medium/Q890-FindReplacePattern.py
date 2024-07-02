class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        matches = []

        for word in words:
            if len(set(word)) != len(set(pattern)):
                continue

            m1, m2 = {}, {}
            match = True

            for w, p in zip(word, pattern):
                if w not in m1:
                    m1[w] = p
                if p not in m2:
                    m2[p] = 2
                if m1[w] != p or m2[p] != w:
                    match = False
                    break

            if match:
                matches.append(word)

        return matches
