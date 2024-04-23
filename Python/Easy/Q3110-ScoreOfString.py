class Solution:
    def scoreOfString(self, s: str) -> int:
        sum = 0
        codes = []
        for c in s:
            codes.append(ord(c))
        for i in range(len(codes) - 1):
            sum += abs(codes[i] - codes[i + 1])
        return sum