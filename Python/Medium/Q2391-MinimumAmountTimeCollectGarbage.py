class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        m = {}
        mins = 0

        for c in ['G', 'M', 'P']:
            for i in reversed(range(len(garbage))):
                if c in garbage[i]:
                    m[c] = i
                    break
        for key, val in m.items():
            mins += sum(travel[0:val])
            mins += sum([g.count(key) for g in garbage])
        return mins