class Solution:
    def minRectanglesToCoverPoints(self, points: List[List[int]], w: int) -> int:
        i, recs = 0, 0
        points.sort(key=lambda x: x[0])
        while(i < len(points)):
            start = points[i][0]
            while i < len(points) and abs(start - points[i][0]) <= w:
                i += 1
            recs += 1
        return recs

    def minRectanglesToCoverPoints(self, points: List[List[int]], w: int) -> int:
        points.sort()
        recs, j = 0, -1
        for x, y in points:
            if x > j:
                j = x + w
                recs += 1
        return recs
