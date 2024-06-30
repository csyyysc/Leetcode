class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        m = {}
        n = len(s)

        for i in range(n):
            c = s[i]
            if c in m:
                m[c] = abs(i - 1 - m[c])
            else:
                m[c] = i

        for k, v in m.items():
            if v != distance[ord(k) - 97]:
                return False
        return True
