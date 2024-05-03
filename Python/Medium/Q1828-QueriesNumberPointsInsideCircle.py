class Solution:
    def __init__(self):
        self.ans = []

    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        for q in queries:
            cnt = 0
            for p in points:
                x, y = p
                cx, cy, cr = q
                if sqrt(abs((cx - x) ** 2) + abs((cy - y) ** 2)) <= cr:
                    cnt += 1
            self.ans.append(cnt)
        return self.ans