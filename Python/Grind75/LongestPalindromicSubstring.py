# https://leetcode.com/problems/longest-palindromic-substring/

class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        start, end = 0, 0

        def centerize(left, right):
            nonlocal start, end

            while left >= 0 and right < n and s[left] == s[right]:
                if right - left > end - start:
                    start, end = left, right
                left, right = left - 1, right + 1

        for i in range(n):
            centerize(i, i)
            centerize(i, i + 1)

        return s[start:end + 1]


if __name__ == "__main__":
    s = "babad"
    print(Solution().longestPalindrome(s))
