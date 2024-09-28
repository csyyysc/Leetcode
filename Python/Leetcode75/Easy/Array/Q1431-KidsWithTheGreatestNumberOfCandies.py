class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        g_candies = []

        for i in range(len(candies)):
            if candies[i] + extraCandies >= max(candies):
                g_candies.append(True)
            else:
                g_candies.append(False)

        return g_candies