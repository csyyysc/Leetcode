class Solution:
    def distinctIntegers(self, n: int) -> int:
        s = set()
        seq = [n]

        while len(seq):
            curr = seq.pop(0)
            s.add(curr)
            for i in range(1, curr + 1):
                if curr % i == 1:
                    seq.append(i)
                    s.add(i)

        return len(s)

    def distinctIntegers(self, n: int) -> int:
        return 1 if n == 1 else n - 1
