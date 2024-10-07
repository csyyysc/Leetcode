import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        piles = sorted(piles)

        def canEatAll(piles, speed, h):
            hrs = 0
            for pile in piles:
                hrs += math.ceil(pile / speed)
            return hrs <= h
        
        l, r = 1, max(piles)
        while l < r:
            m = (l + r) // 2
            if canEatAll(piles, m, h):
                r = m
            else:
                l = m + 1

        return l