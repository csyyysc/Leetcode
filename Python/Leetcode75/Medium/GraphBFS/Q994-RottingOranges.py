from collections import deque

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        fresh_orgs = 0
        queue = deque()
        m, n = len(grid), len(grid[0])
        directions = ([-1, 0], [1, 0], [0, 1], [0, -1])

        for r in range(m):
            for c in range(n):
                if grid[r][n] == 2:
                    queue.append((r, c), 0)
                elif grid[r][n] == 1:
                    fresh_orgs += 1

        mins_elapsed = 0
        while queue:
            r, c, mins = queue.popleft()
            mins_elapsed = max(mins_elapsed, mins)

            for dr, dc in directions:
                nr, nc = r + dr, c + dc

                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    grid[nr][nc] = 2 # Becomes rotten orange
                    fresh_orgs -= 1
                    queue.append((nr, nc, mins + 1))

        return -1 if fresh_orgs > 0 else mins_elapsed