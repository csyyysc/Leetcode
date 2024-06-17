class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        ctr = Counter(nums)
        xor_twice = 0

        for k, v in ctr.items():
            if v == 2:
                xor_twice ^= k

        return xor_twice
