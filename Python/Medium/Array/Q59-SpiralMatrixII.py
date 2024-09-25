class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        val = 1
        spiral = [[0] * n for _ in range(n)]

        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        direction_index = 0
        visited = set()

        i, j = 0, 0
        for _ in range(n * n):
            spiral[i][j] = val
            visited.add((i, j))

            next_i = i + directions[direction_index][0]
            next_j = j + directions[direction_index][1]

            if (0 <= next_i < n and 0 <= next_j < n) and (next_i, next_j) not in visited:
                i, j = next_i, next_j
            else:
                direction_index = (direction_index + 1) % 4
                i += directions[direction_index][0]
                j += directions[direction_index][1]
            val += 1
        return spiral

