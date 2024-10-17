class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        arrows = 1
        points.sort(key=lambda x: x[1])
        prev_e = points[0][1]

        for i in range(1, len(points)):
            start, end = points[i]

            if start > prev_e:
                arrows += 1
                prev_e = end

        return arrows