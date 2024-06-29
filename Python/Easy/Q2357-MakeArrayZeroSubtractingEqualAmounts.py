class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        cnt = 0

        while True:
            non_zeros = [n for n in nums if n != 0]
            if not non_zeros:
                break
            m = min(non_zeros)
            nums = [num - m for num in non_zeros]
            cnt += 1

        return cnt

    def minimumOperations(self, nums: List[int]) -> int:
        return len(set(nums) - {0})
