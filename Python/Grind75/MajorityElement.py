from typing import List

# https://leetcode.com/problems/majority-element/description/


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        m = {}
        for num in nums:
            m[num] = m.get(num, 0) + 1

        return sorted(list(m.items()), key=lambda x: x[1], reverse=True)[0][0]


if __name__ == "__main__":
    solution = Solution()
    print(solution.majorityElement([3, 2, 3]))
