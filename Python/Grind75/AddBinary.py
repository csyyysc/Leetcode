# https://leetcode.com/problems/add-binary/


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]


class SolutionBit:
    def addBinary(self, a: str, b: str) -> str:
        i, j = len(a) - 1, len(b) - 1

        carry = 0
        binary = []
        while i >= 0 or j >= 0 or carry:
            total = carry
            if i >= 0:
                total += int(a[i])
                i -= 1
            if j >= 0:
                total += int(b[j])
                j -= 1

            binary.append(str(total % 2))
            carry = total // 2

        return "".join(binary[::-1])


if __name__ == "__main__":
    solution = Solution()
    print(solution.addBinary("11", "1"))
    print(solution.addBinary("1010", "1011"))
