from typing import List

# https://leetcode.com/problems/contains-duplicate/description/


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums = sorted(nums)

        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                return True

        return False


class SolutionHashmap:
    def containsDuplicate(self, nums: List[int]) -> bool:
        m = {}
        for num in nums:
            if num in m:
                return True
            m[num] = True
        return False


if __name__ == "__main__":
    solution = Solution()
    print(solution.containsDuplicate([1, 2, 3, 4, 5]))
    print(solution.containsDuplicate([1, 2, 3, 4, 5, 1]))
