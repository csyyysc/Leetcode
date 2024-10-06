class Solution:
    def countBits(self, n: int) -> List[int]:
        return [bin(i).count('1') for i in range(n + 1)]
    

    def countBitsOptimized(self, n: int) -> List[int]:
        if n == 0:
            return [0]
        elif n == 1:
            return [0, 1]

        ans = [0, 1]
        for i in range(2, n + 1):
            if i % 2 == 0:
                ans.append(ans[i // 2])
            else:
                ans.append(ans[i // 2] + 1)
        return ans
