class NeighborSum:

    def __init__(self, grid: List[List[int]]):
        self.grid = grid
        self.m = {}

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                self.m[grid[i][j]] = (i, j)

    def adjacentSum(self, value: int) -> int:
        i, j = self.m[value]
        adj = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0}

        if i > 0:
            adj['top'] = self.grid[i - 1][j]
        if i < len(self.grid) - 1:
            adj['bottom'] = self.grid[i + 1][j]
        if j > 0:
            adj['left'] = self.grid[i][j - 1]
        if j < len(self.grid[0]) - 1:
            adj['right'] = self.grid[i][j + 1]
        
        return adj['top'] + adj['bottom'] + adj['left'] + adj['right']

    def diagonalSum(self, value: int) -> int:
        i, j = self.m[value]
        adj = {'top-left': 0, 'top-right': 0, 'bottom-left': 0, 'bottom-right': 0}

        print(i, j)

        if i > 0 and j > 0:
            adj['top-left'] = self.grid[i - 1][j - 1]
        if i > 0 and j < len(self.grid[0]) - 1 :
            adj['top-right'] = self.grid[i - 1][j + 1]
        if i < len(self.grid) - 1 and j > 0:
            adj['bottom-left'] = self.grid[i + 1][j - 1]
        if i < len(self.grid) - 1 and j < len(self.grid[0]) - 1:
            adj['bottom-right'] = self.grid[i + 1][j + 1]
        
        return adj['top-left'] + adj['top-right'] + adj['bottom-left'] + adj['bottom-right']


# Your NeighborSum object will be instantiated and called as such:
# obj = NeighborSum(grid)
# param_1 = obj.adjacentSum(value)
# param_2 = obj.diagonalSum(value)