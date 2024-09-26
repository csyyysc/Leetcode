class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        n, m = len(rowSum), len(colSum)
        matrix = [[0] * len(colSum) for _ in rowSum]

        for i in range(n):
            for j in range(m):
                min_num = min(rowSum[i], colSum[j])
                rowSum[i] -= min_num
                colSum[j] -= min_num
                matrix[i][j] = min_num
        return matrix