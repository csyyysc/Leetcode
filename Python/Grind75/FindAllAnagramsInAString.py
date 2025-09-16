from typing import List

# https://leetcode.com/problems/find-all-anagrams-in-a-string/


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        m, n = len(s), len(p)

        if m == n and sorted(s) != sorted(p) or m < n:
            return []

        anagrams = []
        l_alphas, r_alphas = [0] * 26, [0] * 26

        for i in range(n):
            l_alphas[ord(s[i]) - ord('a')] += 1
        for j in range(n):
            r_alphas[ord(p[j]) - ord('a')] += 1

        for k in range(m - n + 1):
            if l_alphas == r_alphas:
                anagrams.append(k)
            if k < m - n:
                l_alphas[ord(s[k]) - ord('a')] -= 1
                l_alphas[ord(s[k + n]) - ord('a')] += 1

        return anagrams


if __name__ == "__main__":
    s = "cbaebabacd"
    p = "abc"
    print(Solution().findAnagrams(s, p))
