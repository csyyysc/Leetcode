class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        num_set = set()
        full_set = set([i for i in range(1, len(grid) ** 2 + 1)])
        dup = None

        for g in grid:
            for n in g:
                if n in num_set:
                    dup = n
                num_set.add(n)

        return [dup, list(full_set - num_set)[0]]
