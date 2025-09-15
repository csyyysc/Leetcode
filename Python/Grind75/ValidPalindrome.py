import re

# https://leetcode.com/problems/valid-palindrome/


class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r'[^A-Za-z0-9]', '', s).lower()

        n = len(s)
        for i in range(n // 2):
            l, r = s[i], s[n - 1 - i]
            if l != r:
                return False

        return True


if __name__ == "__main__":
    s = "A man, a plan, a canal: Panama"
    print(Solution().isPalindrome(s))
