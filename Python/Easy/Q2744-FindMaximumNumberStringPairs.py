class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        cnt = 0
        s = set()

        for w in words:
            if w[::-1] in s:
                cnt += 1
                s.remove(w[::-1])
            else:
                s.add(w)
        return cnt
