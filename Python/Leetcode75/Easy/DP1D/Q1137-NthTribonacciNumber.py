class Solution:
    def __init__(self):
        self.table = {
            0: 0,
            1: 1,
            2: 1,
            3: 2
        }

    def tribonacci(self, n: int) -> int:
        if n in self.table:
            return self.table[n]
        
        n_tribonacci = self.tribonacci(n - 3) + self.tribonacci(n - 2) + self.tribonacci(n - 1)
        self.table[n] = n_tribonacci
        return n_tribonacci
    

    def tribonacciDP(self, n: int) -> int:
        self.memo = {}

        return self.dp(n)
    
    def dp(self, n):
        if n == 0:
            return 0
        elif n == 1:
            return 1
        elif n == 2:
            return 1

        if n not in self.memo:
            self.memo[n] = self.dp(n - 1) + self.dp(n - 2) + self.dp(n - 3)
        return self.memo[n]