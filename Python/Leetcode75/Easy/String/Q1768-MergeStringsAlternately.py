class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merged_str = ""
        n, m = len(word1), len(word2)

        if n > m:
            for i in range(m):
                merged_str += word1[i]
                merged_str += word2[i]
            
            merged_str += word1[i+1:]
        else:
            for i in range(n):
                merged_str += word1[i]
                merged_str += word2[i]

            merged_str += word2[i+1:]

        return merged_str
    
    def mergeAlternatelyOptimized(self, word1: str, word2: str) -> str:
        merged_str = ""

        for i in range(max(len(word1), len(word2))):
            if i < len(word1):
                merged_str += word1[i]
            if i < len(word2):
                merged_str += word2[i]

        return merged_str