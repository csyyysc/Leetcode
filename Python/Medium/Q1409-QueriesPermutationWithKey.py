class Solution:
    def processQueries(self, queries: List[int], m: int) -> List[int]:
        res = []
        p = [i+1 for i in range(0, m + 1)]

        for q in queries:
            tar_pos = p.index(q)
            res.append(tar_pos)
            p.insert(0,p[tar_pos])
            p.pop(tar_pos + 1)

        return res