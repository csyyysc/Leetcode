class Solution:
    def countPoints(self, rings: str) -> int:
        cnt = 0
        rods = {str(k): "" for k in range(10)}

        for i in range(0, len(rings), 2):
            c = rings[i : i + 1]
            p = rings[i + 1 : i + 2]
            rods[str(p)] = rods[str(p)] + c

        for _, v in rods.items():
            if "R" in v and "G" in v and "B" in v:
                cnt += 1
        return cnt
