class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        count = 0
        nums.sort()
        n = len(nums)
        for i in range(0, n):
            for j in range(i + 1, n):
                if (nums[i] + nums[j]) < target:
                    count += 1
        return count
    
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        pairs = 0
        l, r = 0, len(nums) - 1

        while l < r:
            if nums[l] + nums[r] < target:
                pairs += r - l
                l += 1
            else:
                r -= 1
        return pairs