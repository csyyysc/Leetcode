class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        cin_w = -prices[0]
        cin_wo = 0

        for i in range(len(prices)):
            cin_w = max(cin_w, cin_wo - prices[i])
            cin_wo = max(cin_wo, cin_w + prices[i] - fee)

        return cin_wo