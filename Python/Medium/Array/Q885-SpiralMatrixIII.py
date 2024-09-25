class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        spiral = []

        x, y, n = 0, 1, 0
        while len(spiral) < rows * cols:
            for i in range(n // 2 + 1):
                if 0 <= rStart < rows and 0 <= cStart < cols:
                    spiral.append([rStart, cStart])
                rStart += x
                cStart += y
            x, y, n = y, -x, n + 1
        return spiral