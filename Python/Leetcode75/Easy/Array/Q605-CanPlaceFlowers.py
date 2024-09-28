class Solution:
    def canPlaceFlowers(self, fb: List[int], n: int) -> bool:
        spaces = 0

        for i in range(len(fb)):
            if fb[i] == 0 and (i == 0 or fb[i - 1] == 0) and (i == len(fb) - 1 or fb[i + 1] == 0):
                spaces += 1
                fb[i] = 1
        return spaces >= n
