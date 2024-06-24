class Solution:
    def mergeSimilarItems(
        self, items1: List[List[int]], items2: List[List[int]]
    ) -> List[List[int]]:
        m = {}

        for pair in items1:
            k, v = pair
            m[k] = m.get(k, 0) + v
        for pair in items2:
            k, v = pair
            m[k] = m.get(k, 0) + v
        m = [[k, v] for k, v in m.items()]
        m = sorted(m, key=lambda x: x[0])
        return m
