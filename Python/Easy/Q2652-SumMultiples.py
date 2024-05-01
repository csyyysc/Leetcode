class Solution:
    def sumOfMultiples(self, n: int) -> int:
        s = 0
        for i in range(1, n + 1):
            if i % 3 == 0 or i % 5 == 0 or i % 7 == 0:
                s += i
        return s

    """
    Refer to 'Gaussian Summation Formula'
    """
    def sumOfMultiples(self, n: int) -> int:
        def sum_k(k):
            u = floor(n / k)
            return k * (u * (u + 1) / 2)

        return int(
            sum_k(3) + sum_k(5) + sum_k(7)
            - sum_k(3 * 5) - sum_k(3 * 7) - sum_k(5 * 7)
            + sum_k(3 * 5 * 7)
        )