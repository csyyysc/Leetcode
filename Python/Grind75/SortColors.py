from typing import List

# https://leetcode.com/problems/sort-colors/description/


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] > nums[j]:
                    tmp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = tmp


class SolutionTwoPointer:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        r_cnt, w_cnt, b_cnt = 0, 0, 0
        for num in nums:
            if num == 0:
                r_cnt += 1
            if num == 1:
                w_cnt += 1
            if num == 2:
                b_cnt += 1

        for i in range(n):
            if r_cnt:
                nums[i] = 0
                r_cnt -= 1
            elif w_cnt:
                nums[i] = 1
                w_cnt -= 1
            elif b_cnt:
                nums[i] = 2
                b_cnt -= 1


if __name__ == "__main__":
    solution = Solution()
    print(solution.sortColors([2, 0, 2, 1, 1, 0]))
