class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        cells = []
        min_digit = min(int(s[1]), int(s[4]))
        max_digit = max(int(s[1]), int(s[4]))
            
        min_alpha = s[0]
        max_alpha = s[3]

        for i in range(ord(min_alpha), ord(max_alpha) + 1):
            for j in range(min_digit, max_digit + 1):
                cells.append(chr(i) + str(j))

        return cells