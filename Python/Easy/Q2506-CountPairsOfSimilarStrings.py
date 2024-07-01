class Solution:
    def similarPairs(self, words: List[str]) -> int:
        m1 = {}
        m2 = {}
        cnt = 0

        for idx, word in enumerate(words):
            m1[idx] = "".join(sorted(set(word)))

        for val in m1.values():
            m2[val] = m2.get(val, 0) + 1

        for val in m2.values():
            if val > 1:
                cnt += (val * (val - 1)) // 2

        return cnt
