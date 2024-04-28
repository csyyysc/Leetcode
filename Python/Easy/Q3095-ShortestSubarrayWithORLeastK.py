class Solution:
    def minimumSubarrayLength(self, nums: List[int], k: int) -> int:
        n = len(nums)
        min_len = n + 1

        for left in range(n):
            bit_or = 0
            for right in range(left, n):
                bit_or |= nums[right]
                if bit_or >= k:
                    min_len = min(min_len, right - left + 1)
                    break
        return min_len if min_len <= n else -1
