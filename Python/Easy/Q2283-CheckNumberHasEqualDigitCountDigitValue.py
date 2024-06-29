class Solution:
    def digitCount(self, num: str) -> bool:
        l = len(num)
        m = {str(i): 0 for i in range(l)}

        for n in num:
            m[n] = m.get(n, 0) + 1

        for i in range(l):
            if m[str(i)] != int(num[i]):
                return False
        return True
