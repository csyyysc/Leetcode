class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        pers = []

        def dfs(i):
            if i == len(nums):
                pers.append(nums[:])
                return
            
            for j in range(i, len(nums)):
                nums[i], nums[j] = nums[j], nums[i]
                dfs(i + 1)
                nums[i], nums[j] = nums[j], nums[i]
        dfs(0)

        return pers