class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False

        if set(word1) != set(word2):
            return False

        word1 = "".join(sorted(list(word1)))
        word2 = "".join(sorted(list(word2)))
        if word1 == word2:
            return True

        m1, m2 = {}, {}

        for ch in word1:
            m1[ch] = m1.get(ch, 0) + 1
        
        for ch in word2:
            m2[ch] = m2.get(ch, 0) + 1
        
        for ch1 in list(m1.keys()):
            for ch2 in list(m2.keys()):
                if m1[ch1] == m2[ch2]:
                    del m1[ch1]
                    del m2[ch2]
                    break
                
        return len(m1) == 0 and len(m2) == 0
    
    def closeStringsOptimized(self, w1: str, w2: str) -> bool:
        c1, c2 = Counter(w1), Counter(w2)

        n1 = Counter([v for v in c1.values()])
        n2 = Counter([v for v in c2.values()])

        return c1 == c2 or (n1 == n2 and set(w1) == set(w2))