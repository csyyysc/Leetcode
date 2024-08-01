class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        comb = []

        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    if nums[i] + nums[j] + nums[k] == 0:
                        comb.append(sorted([nums[i], nums[j], nums[k]]))

        no_du = []
        for c in comb:
            if c in no_du:
                continue
            no_du.append(c)

        return no_du

    def threeSumOptimized(self, nums: List[int]) -> List[List[int]]:
        comb = []
        nums.sort()
        n = len(nums)

        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            left, right = i + 1, n - 1
            while left < right:
                total = nums[left] + nums[i] + nums[right]
                if total == 0:
                    comb.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
            return comb
