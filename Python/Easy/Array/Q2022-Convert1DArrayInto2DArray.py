class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        matrix = []

        if len(original) != m * n:
            return matrix

        row = []
        for i in range(m * n):
            row.append(original[i])
            if len(row) == n:
                matrix.append(row)
                row = []

        return matrix
