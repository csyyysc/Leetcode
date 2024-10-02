class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        pairs = 0
        n = len(grid)
        row_m = {}

        for i in range(n):
            row = tuple(grid[i])
            row_m[row] = row_m.get(row, 0) + 1

        for i in range(n):
            col = []
            for j in range(n):
                col.append(grid[j][i])

            col = tuple(col)
            
            if col in row_m:
                pairs += row_m[col]

        return pairs