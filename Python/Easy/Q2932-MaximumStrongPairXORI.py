class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        pairs = []
        n = len(nums)

        for i in range(n):
            for j in range(i, n):
                if abs(nums[i] - nums[j]) <= min(nums[i], nums[j]):
                    pairs.append([nums[i], nums[j]])
        xors = [pair[0] ^ pair[1] for pair in pairs]

        return max(xors)

    def maximumStrongPairXor(self, nums: List[int]) -> int:
        m = 0
        nums.sort()

        for idx, o_num in enumerate(nums[:-1]):
            for i_num in nums[idx + 1 :]:
                if (o_num * 2) < i_num:
                    break
                if (o_num ^ i_num) > m:
                    m = o_num ^ i_num
        return m
