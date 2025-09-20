class Solution:
    def climbStairs(self, n: int) -> int:

        dp = [1] * (n + 1)
        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[-1]


class SolutionOptimized:
    def climbStairs(self, n: int) -> int:

        if n <= 2:
            return n

        el1, el2 = 1, 2
        for _ in range(3, n + 1):
            el1, el2 = el2, el1 + el2

        return el2


if __name__ == "__main__":
    solution = Solution()
    print(solution.climbStairs(3))
