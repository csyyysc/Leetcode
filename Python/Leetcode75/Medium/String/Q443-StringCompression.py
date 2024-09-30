class Solution:
    def compress(self, chars: List[str]) -> int:
        n = len(chars)
        left = 0
        pivot = 0

        while left < n:
            cnt = 0
            ch = chars[left]

            while left < n and chars[left] == ch:
                cnt += 1
                left += 1
            
            chars[pivot] = ch
            pivot += 1
            
            if cnt > 1:
                for digit in str(cnt):
                    chars[pivot] = digit
                    pivot += 1
            
        return pivot