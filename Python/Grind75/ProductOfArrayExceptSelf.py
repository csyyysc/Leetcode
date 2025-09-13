from typing import List

# https://leetcode.com/problems/product-of-array-except-self/description/


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        l_prods, r_prods = [1] * n, [1] * n

        for i in range(n - 1):
            el = nums[i]
            l_prods[i + 1] = l_prods[i] * el

        for j in range(n - 1):
            r_prods[n - 2 - j] = r_prods[n - 1 - j] * nums[n - 1 - j]

        return [l * r for l, r in zip(l_prods, r_prods)]


if __name__ == "__main__":
    solution = Solution()
    print(solution.productExceptSelf([1, 2, 3, 4]))
