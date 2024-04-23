class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        h = 0
        for d in str(x):
            h += int(d)
        return h if x % h == 0 else -1