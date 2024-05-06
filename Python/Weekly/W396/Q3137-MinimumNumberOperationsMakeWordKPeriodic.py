from collections import Counter
class Solution:
    def spliter(self, w, l):
            return [w[i:i+l] for i in range(0, len(w), l)] 

    def remove_max_key(self, c):
            m_k = max(c, key=c.get)
            del c[m_k]
            return c

    def minimumOperationsToMakeKPeriodic(self, word: str, k: int) -> int:        
        word = self.spliter(word, k)
        freq_cnt = Counter(word)
        self.remove_max_key(freq_cnt)
        return sum(freq_cnt.values())