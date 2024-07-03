from collections import Counter


class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        cnt = 0
        n = len(nums)

        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    for d in range(k + 1, n):
                        if nums[i] + nums[j] + nums[k] == nums[d]:
                            cnt += 1
        return cnt

    def countQuadruplets(self, nums: List[int]) -> int:
        cnt = 0
        n = len(nums)
        counter = Counter()

        for i in range(n):
            for j in range(i + 1, n):
                cnt += counter[nums[j] - nums[i]]
            for k in range(n):
                counter[nums[i] + nums[k]] += 1

        return cnt
