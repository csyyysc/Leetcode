# https://leetcode.com/problems/ransom-note/

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomLetter = [0] * 26
        magazineLetter = [0] * 26

        for c in ransomNote:
            ransomLetter[ord(c) - ord('a')] += 1
        for c in magazine:
            magazineLetter[ord(c) - ord('a')] += 1

        for r, m in zip(ransomLetter, magazineLetter):
            if r > m:
                return False

        return True


class SolutionOptimized:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        counts = [0] * 26

        for c in magazine:
            counts[ord(c) - ord('a')] += 1

        for c in ransomNote:
            index = ord(c) - ord('a')
            counts[index] -= 1
            if counts[index] < 0:
                return False

        return True


if __name__ == "__main__":
    solution = Solution()
    print(solution.canConstruct("a", "b"))
    print(solution.canConstruct("aa", "ab"))
    print(solution.canConstruct("aa", "aab"))
