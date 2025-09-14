from typing import List

# https://leetcode.com/problems/combination-sum/description/


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

        combs = []
        n = len(candidates)
        candidates = sorted(candidates)

        def backtrack(comb, remaining, index):
            if remaining == 0:
                combs.append(comb[:])
                return
            elif remaining < 0 or index == n:
                return

            candidate = candidates[index]
            comb.append(candidate)
            backtrack(comb, remaining - candidate, index)
            comb.pop()
            backtrack(comb, remaining, index + 1)

        backtrack([], target, 0)
        return combs


if __name__ == "__main__":
    solution = Solution()
    print(solution.combinationSum([2, 3, 6, 7], 7))
