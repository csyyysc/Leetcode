class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        groups, m = [], {}

        for idx, gs in enumerate(groupSizes):
            if gs in m:
                m[gs].append(idx)
            else:
                m[gs] = [idx]

        for k, v in m.items():
            for i in range(0, len(v), int(k)):
                groups.append(v[i:i+int(k)])
        return groups
