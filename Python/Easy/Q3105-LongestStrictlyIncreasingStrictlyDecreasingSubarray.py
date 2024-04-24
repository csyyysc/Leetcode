class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        ls = 1
        for i in range(len(nums) - 1):
            count = 1
            for j in range(i, len(nums) - 1):
                if(nums[j] < nums[j + 1]):
                    count += 1
                else: break
            ls = max(ls, count)

        nums = list(reversed(nums))

        for i in range(len(nums) - 1):
            count = 1
            for j in range(i, len(nums) - 1):
                if(nums[j] < nums[j + 1]):
                    count += 1
                else: break
            ls = max(ls, count)
        return ls
    
    def longestMonotonicSubarray2(self, nums: List[int]) -> int:
        if not nums:
            return 0
        inc, dec, max_len = 1, 1, 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                inc += 1
                dec = 1
            elif nums[i] < nums[i - 1]:
                dec += 1
                int = 1
            else:
                inc = 1
                dec = 1
            max_len = max(max_len, inc, dec)
        return max_len
        