from collections import defaultdict

class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        pairs = 0
        nums.sort()

        l, r = 0, len(nums) - 1
        while l < r:
            if k - nums[l] == nums[r]:
                pairs += 1
                l += 1
                r -= 1
            elif nums[l] + nums[r] > k:
                r -= 1
            else:
                l += 1

        return pairs
    
    def maxOperationsHashmap(self, nums: List[int], k: int) -> int:
        count_map = {}
        pairs = 0

        for num in nums:
            complement = k - num
            if complement in count_map and count_map[complement] > 0:
                pairs += 1
                count_map[complement] -= 1
            else:
                count_map[num] = count_map.get(num, 0) + 1

        return pairs

    def maxOperationsHashmapBuiltIn(self, nums: List[int], k: int) -> int:
        count_map = defaultdict(int)
        pairs = 0

        for num in nums:
            complement = k - num
            if count_map[complement] > 0:
                pairs += 1
                count_map[complement] -= 1
            else:
                count_map[num] += 1

        return pairs
