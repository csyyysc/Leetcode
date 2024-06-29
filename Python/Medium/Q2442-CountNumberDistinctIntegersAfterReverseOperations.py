class Solution:
    def countDistinctIntegers(self, nums: List[int]) -> int:
        r_nums = nums[:]

        for n in nums:
            r_nums.append(int(str(n)[::-1]))
        return len(set(r_nums))
