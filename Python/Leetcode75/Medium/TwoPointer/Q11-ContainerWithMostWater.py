class Solution:
    def maxArea(self, hs: List[int]) -> int:
        max_area = 0

        for i in range(len(hs)):
            for j in range(i + 1, len(hs)):
                width = j - i
                height = min(hs[i], hs[j])
                max_area = max(max_area, width * height)

        return max_area
    
    def maxAreaOptimized(self, hs: List[int]) -> int:
        max_area = 0
        left, right = 0, len(hs) - 1

        while left < right:
            w = right - left
            h = min(hs[left], hs[right])

            max_area = max(max_area, w * h)
            if hs[left] < hs[right]:
                left += 1
            else:
                right -= 1

        return max_area