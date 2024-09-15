# from itertools import combinations

# class Solution:
#     def maxScore(self, a: List[int], b: List[int]) -> int:
#         score = float('-inf')

#         for combo in combinations(range(len(b)), 4):
#             curr_score = sum(a[i] * b[idx] for i, idx in enumerate(combo))
#             score = max(score, curr_score)
#         return score

class Solution:
    def maxScore(self, a: List[int], b: List[int]) -> int:
        dp = [-float('inf')] * 4
        dp[0] = a[0] * b[0]

        for i in range(1, len(b)):
            for j in range(3, -1, -1):
                if j == 0:
                    dp[j] = max(dp[j], a[j] * b[i])
                else:
                    dp[j] = max(dp[j], dp[j - 1] + a[j] * b[i])
        return dp[3]