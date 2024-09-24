class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        avgs = []

        while len(nums) > 0:
            min_n = min(nums)
            max_n = max(nums)
            nums.remove(min_n)
            nums.remove(max_n)
            avgs.append((min_n + max_n) / 2)
        return min(avgs)