class Solution:
    def sortTheStudents(self, score: List[List[int]], k: int) -> List[List[int]]:
        vals = []
        matrix = []
        for ex in score:
            vals.append(ex[k])

        for _ in range(len(score)):
            m = max(vals)
            i = vals.index(m)
            vals[i] = 0
            matrix.append(score[i])
        return matrix

    def sortTheStudents(self, score: List[List[int]], k: int) -> List[List[int]]:
        return sorted(score, key=lambda x:x[k], reverse=True)