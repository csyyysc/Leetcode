class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        for i in range(2, n - 1):
            if not self.helper(bin(i)):
                return False
        return True

    def helper(self, bits: str) -> bool:
        left, right = 0, len(bits) - 1

        while(left <= right):
            if bits[left] != bits[right]:
                return False
            left += 1
            right -= 1
        return True