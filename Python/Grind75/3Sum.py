from typing import List

# https://leetcode.com/problems/3sum/description/


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        nums = sorted(nums)

        triplets = []
        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            el = nums[i]
            l_idx, r_idx = i + 1, n - 1
            while l_idx < r_idx:
                total = el + nums[l_idx] + nums[r_idx]
                if total == 0:
                    triplets.append([el, nums[l_idx], nums[r_idx]])
                    l_idx += 1
                    r_idx -= 1
                    while l_idx < r_idx and nums[l_idx] == nums[l_idx - 1]:
                        l_idx += 1
                    while l_idx < r_idx and nums[r_idx] == nums[r_idx + 1]:
                        r_idx -= 1
                elif total < 0:
                    l_idx += 1
                elif total > 0:
                    r_idx -= 1

        return triplets


if __name__ == "__main__":
    solution = Solution()
    print(solution.threeSum([-1, 0, 1, 2, -1, -4]))
    print(solution.threeSum([0, 0, 0, 0]))
    print(solution.threeSum(
        [[2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]]))
