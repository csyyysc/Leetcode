class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        m = {}
        n = len(nums)

        for i in range(n):
            for j in range(len(nums[i])):
                m[nums[i][j]] = m.get(nums[i][j], 0) + 1

        return sorted([key for key, val in m.items() if val == n])
