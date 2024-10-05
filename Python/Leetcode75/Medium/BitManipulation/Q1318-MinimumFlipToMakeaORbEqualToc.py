class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:

        a = bin(a)[2:]
        b = bin(b)[2:]
        c = bin(c)[2:]

        n = max(len(a), len(b), len(c))
        a = "0" * (n - len(a)) + a
        b = "0" * (n - len(b)) + b
        c = "0" * (n - len(c)) + c

        flips = 0
        for i in range(n):
            if c[i] == '0':
                if a[i] == '1':
                    flips += 1
                if b[i] == '1':
                    flips += 1
            else:
                if a[i] == '1' or b[i] == '1':
                    continue
                else:
                    flips += 1

        return flips