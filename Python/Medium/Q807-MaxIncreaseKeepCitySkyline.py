class Solution:

    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        self.rMax = []
        self.cMax = []
        cnt = 0
        n = len(grid)

        for row in grid:
            self.rMax.append(max(row))
        for col in zip(*grid):
            self.cMax.append(max(col))
        for i in range(0, n):
            for j in range(0, n):
                cnt += abs(grid[i][j] - min(self.rMax[i], self.cMax[j]))
        return cnt