class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        cnt = 0
        m1, m2 = {}, {}

        for w in words1:
            m1[w] = m1.get(w, 0) + 1
        for w in words2:
            m2[w] = m2.get(w, 0) + 1

        for k, v in m1.items():
            if k in m2 and v == 1 and m2[k] == 1:
                cnt += 1

        return cnt
