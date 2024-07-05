class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        ops = 0
        s = set()

        for num in nums[::-1]:
            ops += 1
            if num not in s and num <= k:
                s.add(num)
            if len(s) == k:
                break

        return ops
