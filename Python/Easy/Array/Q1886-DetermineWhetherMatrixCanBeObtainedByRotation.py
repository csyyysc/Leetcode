class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        for i in range(4):
            rotated_mat = [row[::-1] for row in self.transpose(mat)]
            if self.checker(rotated_mat, target):
                return True
            mat = rotated_mat
        return False

    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]

    def checker(Self, matrix, target) -> bool:
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] != target[i][j]:
                    return False
        return True
