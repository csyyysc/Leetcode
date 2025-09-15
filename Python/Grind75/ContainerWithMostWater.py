from typing import List

# https://leetcode.com/problems/container-with-most-water/


class Solution:
    def maxArea(self, height: List[int]) -> int:
        area = 0

        l = 0
        r = len(height) - 1

        while l < r:
            minH = min(height[l], height[r])
            width = r - l

            newArea = minH * width
            area = max(area, newArea)

            if (height[l] < height[r]):
                l += 1
            else:
                r -= 1
        return area


if __name__ == "__main__":
    height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    print(Solution().maxArea(height))
