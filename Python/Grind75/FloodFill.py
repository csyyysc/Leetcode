from typing import List

# https://leetcode.com/problems/flood-fill/


class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        originColor = image[sr][sc]

        if originColor == color:
            return image

        m, n = len(image), len(image[0])
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        def traverse(r, c):
            if (r < 0 or r >= m) or (c < 0 or c >= n) or (image[r][c] != originColor):
                return

            image[r][c] = color
            for dr, dc in directions:
                traverse(r + dr, c + dc)

        traverse(sr, sc)

        return image


if __name__ == "__main__":
    image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
    sr = 1
    sc = 1
    color = 2
    print(Solution().floodFill(image, sr, sc, color))
