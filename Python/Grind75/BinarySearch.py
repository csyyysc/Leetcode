from typing import List

# https://leetcode.com/problems/binary-search/


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            m = (l + r) // 2
            el = nums[m]

            if el < target:
                l = m + 1
            elif el > target:
                r = m - 1
            elif el == target:
                return m

        return -1


if __name__ == "__main__":
    nums = [-1, 0, 3, 5, 9, 12]
    target = 9
    print(Solution().search(nums, target))
