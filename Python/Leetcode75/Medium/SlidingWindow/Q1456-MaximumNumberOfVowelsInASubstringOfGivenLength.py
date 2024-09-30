class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        n = len(s)
        max_cnt = 0
        vowels = set('aeiou')

        for i in range(n - k + 1):
            sub = s[i:i+k]
            cnt = 0
            for ch in sub:
                if ch in vowels:
                    cnt += 1
            max_cnt = max(max_cnt, cnt)

        return max_cnt
    
    def maxVowelsOptimized(self, s: str, k: int) -> int:
        n = len(s)
        max_cnt = 0
        vowels = set('aeiou')

        for i in range(k):
            if s[i] in vowels:
                max_cnt += 1

        cnt = max_cnt
        for j in range(k, n):
            if s[j] in vowels:
                cnt += 1

            if s[j - k] in vowels:
                cnt -= 1

            max_cnt = max(max_cnt, cnt)
            
        return max_cnt