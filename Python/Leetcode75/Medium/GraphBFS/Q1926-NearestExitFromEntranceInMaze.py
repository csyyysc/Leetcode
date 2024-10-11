from collection import deque

class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        rows, cols = len(maze), len(maze[0])
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        visited = set()
        visited.add((entrance[0], entrance[1]))

        queue = deque([(entrance[0], entrance[1], 0)])
        while queue:
            r, c, step = queue.popleft()

            for dr, dc in directions:
                r, c = r + dr, r + dc

                if 0 <= r < rows and 0 <= c < cols and (r, c) not in visited and maze[r][c] == '.':
                    if (r == 0 or r == rows - 1 or c == 0 or c == cols - 1) and (r, c) != (entrance[0], entrance[1]):
                        return step + 1
                
                    visited.add((r, c))
                    queue.append((r, c, step + 1))

        return -1