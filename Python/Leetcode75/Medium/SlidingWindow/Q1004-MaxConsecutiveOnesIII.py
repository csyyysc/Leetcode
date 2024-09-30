class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        flips = 0
        max_cnt = 0
        n = len(nums)

        for right in range(n):
            if nums[right] == 0:
                flips += 1

            while flips > k:
                if nums[left] == 0:
                    flips -= 1
                left += 1
                
            max_cnt = max(max_cnt, right - left + 1)
            
        return max_cnt