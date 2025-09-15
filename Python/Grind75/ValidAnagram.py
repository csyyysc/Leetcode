# https://leetcode.com/problems/valid-anagram/


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        for l, r in zip(sorted(s), sorted(t)):
            if l != r:
                return False

        return True


if __name__ == "__main__":
    s = "anagram"
    t = "nagaram"
    print(Solution().isAnagram(s, t))
