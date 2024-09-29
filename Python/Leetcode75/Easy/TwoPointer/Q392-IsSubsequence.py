class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        n = len(s)
        cnt = n

        for i in range(n):
            if s[i] not in t or cnt > len(t):
                return False
            pivot = t.index(s[i])
            cnt -= 1
            t = t[pivot+1:]
            
        return True

    def isSubsequenceOptimized(self, s: str, t: str) -> bool:
        if len(s) > len(t):
            return False

        sub_cnt = 0
        for ch in t:
            if sub_cnt < len(s) and s[sub_cnt] == ch:
                sub_cnt += 1
            
        return sub_cnt == len(s)