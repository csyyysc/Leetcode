class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        found = []
        for i in range(0, len(words)):
            if x in words[i]: 
                found.append(i)
        return found