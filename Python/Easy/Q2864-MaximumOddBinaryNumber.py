class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        zeros = s.count("0")
        ones = s.count("1")
        odd = ""

        for _ in range(ones - 1):
            odd += "1"
        for _ in range(zeros):
            odd += "0"
        odd += "1"
        return odd

    def maximumOddBinaryNumber(self, s: str) -> str:
        ones = s.count("1")
        zeros = s.count("0")
        return "1" * (ones - 1) + "0" * zeros + "1"
