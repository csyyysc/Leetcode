class Solution:
    def reportSpam(self, message: List[str], bannedWords: List[str]) -> bool:
        m1, m2 = {}, {}

        for word in message:
            m1[word] = m1.get(word, 0) + 1
        
        for word in bannedWords:
            m2[word] = word
        
        cnt = 0
        for word in m1:
            if word in m2:
                cnt += m1.get(word)
                if cnt > 1:
                    return True
        return False
        
