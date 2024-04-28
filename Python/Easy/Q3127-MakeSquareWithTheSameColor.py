class Solution:
    def canMakeSquare(self, grid: List[List[str]]) -> bool:
        for i in range(2):
            for j in range(2):
                for color in ['B', 'W']:
                    if sum(grid[i + x][j + y] == color for x in range(2) for y in range(2)) >= 3:
                        return True
        return False