class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        coins = 0

        while len(piles) > 0:
            pile = [piles.pop(0)] + piles[-2:]
            del piles[-2:]
            coins += pile[1]
        return 
    
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        n = len(piles) // 3
        return sum(piles[n::2])