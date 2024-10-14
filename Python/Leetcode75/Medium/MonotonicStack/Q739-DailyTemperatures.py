class Solution:
    def dailyTemperatures(self, tmps: List[int]) -> List[int]:
        ans = []

        for i in range(len(tmps)):
            cur = tmps[i]
            for j in range(i+1, len(tmps)):
                if cur < tmps[j]:
                    ans.append(j - i)
                    break
                if j == len(tmps) - 1:
                    ans.append(0)
            if i == j:
                ans.append(0)

        return ans
    
    def dailyTemperaturesOptimized(self, T: List[int]) -> List[int]:
        n = len(T)
        stack = []
        ans = [0] * n

        for i, v in enumerate(T):
            while stack and stack[-1][1] < v:
                index, _ = stack.pop()
                ans[index] = i - index
            stack.append([i, v])

        return ans
