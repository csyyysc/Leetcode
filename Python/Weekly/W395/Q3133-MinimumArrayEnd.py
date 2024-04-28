class Solution:
    def minEnd(self, n: int, x: int) -> int:
        """
        In each iteration, it performs a bitwise left shift operation on 1 by i bits, 
        and then performs a bitwise AND operation with x. If the result is 0, it appends
        the result of the left shift opeartion to the base list.

        This essentially collects all powers of 2 that are not present in the binary representation of x.
        """
        base = []
        for i in range(60):
            if (1 << i) & x == 0:
                base.append(1 << i)

        """
        In each iteration, it performs a bitwise AND operation with (n - 1). If the result
        if greater than 0, it adds the corresponding value from the base list to ans.

        This essentially adds the powers of 2 that are present in the binary representation of (n - 1),
        but not in x to ans.
        """
        ans = x
        for i in range(30):
            if (1 << i) & (n - 1) > 0:
                ans += base[i]
        return ans