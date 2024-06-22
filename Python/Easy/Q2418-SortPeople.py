class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        ns = []
        n = len(heights)

        for _ in range(n):
            m = max(heights)
            idx = heights.index(m)
            heights[idx] = 0
            ns.append(names[idx])

        return ns

    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        d = {heights[i]: names[i] for i in range(len(names))}

        heights.sort(reverse=True)
        for i in range(len(heights)):
            names[i] = d[heights[i]]
        return names
