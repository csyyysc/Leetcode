class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        n = len(prices)

        for i in range(n):
            for j in range(i + 1, n):
                if prices[i] < prices[j]:
                    profit = max(profit, prices[j] - prices[i])

        return profit

    def maxProfitOptimized(self, prices: List[int]) -> int:
        min_price = float("inf")
        profit = 0

        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > profit:
                profit = price - min_price

        return profit
