class Solution:
    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        oneRows, oneCols = [], []
        diff = []

        for g in grid:
            oneRows.append(g.count(1))
        for g in zip(*grid):
            oneCols.append(g.count(1))

        for i in range(0, m):
            d = []
            for j in range(0, n):
                d.append(oneRows[i] + oneCols[j] - (m - oneRows[i]) - (n - oneCols[j]))
            diff.append(d)
        return diff

    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
        def summation(nums):
            return 2 * sum(nums) - len(nums)
        
        m, n = len(grid), len(grid[0])
        rows = list(map(summation, grid))
        cols = list(map(summation, zip(*grid)))

        for i, j in product(range(m), range(n)):
            grid[i][j] = rows[i] + cols[j]
        return grid