class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        n = len(gain)

        altitudes = [0] * (n + 1)
        for i in range(len(gain)):
            altitudes[i + 1] = altitudes[i] + gain[i]
        
        return max(altitudes)