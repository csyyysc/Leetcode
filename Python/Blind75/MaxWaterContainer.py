class Solution:
    def maxArea(self, h: List[int]) -> int:
        m = 0
        n = len(h)

        for i in range(n):
            for j in range(i + 1, n):
                a = abs(j - i) * min(h[i], h[j])
                m = max(m, a)
        return m

    def maxAreaOptimized(self, h: List[int]) -> int:
        m = 0

        left, right = 0, len(h) - 1
        while left < right:
            width = right - left
            area = width * min(h[left], h[right])
            m = max(m, area)

            if h[left] < h[right]:
                left += 1
            else:
                right -= 1
        return m
