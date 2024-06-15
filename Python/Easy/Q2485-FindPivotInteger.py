class Solution:
    # def pivotInteger(self, n: int) -> int:
    #     if n == 1:
    #         return 1

    #     total = sum([i for i in range(1, n + 1)])
    #     start = 0

    #     for i in range(1, n + 1):
    #         start += i
    #         if i >= 2:
    #             total -= (i - 1)
    #         if start == total:
    #             return i

    #     return -1

    def pivotInteger(self, n: int) -> int:
        """Derive from the formula of the sum of the first n natural numbers.

        """
        a = ((n**2 + n) // 2) ** 0.5
        return int(a) if int(a) == a else -1