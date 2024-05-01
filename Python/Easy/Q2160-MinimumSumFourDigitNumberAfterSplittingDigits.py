class Solution:
    def minimumSum(self, num: int) -> int:
        digits = sorted([int(d) for d in str(num)])
        return int(str(digits[0]) + str(digits[3])) + int(str(digits[1]) + str(digits[2]))