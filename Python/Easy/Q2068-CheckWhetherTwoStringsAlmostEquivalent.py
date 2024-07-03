class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        m1, m2 = {}, {}

        for w in word1:
            m1[w] = m1.get(w, 0) + 1
        for w in word2:
            m2[w] = m2.get(w, 0) + 1

        for k, v in m1.items():
            if k in m2 and v - m2[k] > 3:
                return False
            if k not in m2 and v > 3:
                return False

        for k, v in m2.items():
            if k in m1 and v - m1[k] > 3:
                return False
            if k not in m1 and v > 3:
                return False
        return True

    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        cnt1 = self.cnt(word1)
        cnt2 = self.cnt(word2)

        return all(abs(v1 - v2) <= 3 for v1, v2 in zip(cnt1, cnt2))

    def cnt(self, word):
        arr = [0] * 26

        for c in word:
            arr[ord(c) - ord("a")] += 1
        return arr
