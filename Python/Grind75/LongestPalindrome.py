# https://leetcode.com/problems/longest-palindrome/


class Solution:
    def longestPalindrome(self, s: str) -> int:
        if len(set(s)) == 1:
            return len(s)

        m = {}
        for c in s:
            m[c] = m.get(c, 0) + 1

        count = 0
        for k, v in m.items():
            if v % 2 == 0:
                count += v
                m[k] -= v
                continue
            while v > 1:
                count += 2
                v -= 2
                m[k] -= 2

        if any(n > 0 for n in list(m.values())):
            count += 1

        return count


class SolutionSimplified:
    def longestPalindrome(self, s: str) -> int:
        count = 0
        for c in set(s):
            count += s.count(c) // 2 * 2
        return count + (1 if count < len(s) else 0)


if __name__ == "__main__":
    s = "abccccdd"
    print(Solution().longestPalindrome(s))
