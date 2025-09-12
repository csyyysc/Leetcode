from typing import List

# https://leetcode.com/problems/two-sum/


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)

        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []


class SolutionHashmap:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        m = {}

        for idx, num in enumerate(nums):
            remain = target - num
            if remain in m:
                return [idx, m[remain]]
            m[num] = idx
        return []


if __name__ == "__main__":
    solution = Solution()
    print(solution.twoSum([2, 7, 11, 15], 9))
