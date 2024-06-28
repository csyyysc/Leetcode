class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        occur = {c: i for i, c in enumerate(s)}
        start = end = 0
        ans = []

        for i, c in enumerate(s):
            end = max(end, occur[c])
            if i == end:
                ans.append(end - start + 1)
                start = end + 1
        return ans
