class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        cnt = 0
        vowels = set('aeiou')

        for start in range(len(word)):
            c_const = 0
            vowels_s = set()

            for end in range(start, len(word)):
                ch = word[end]

                if ch in vowels:
                    vowels_s.add(ch)
                else:
                    c_const += 1

                if len(vowels_s) == len(vowels) and c_const == k:
                    cnt += 1
        return cnt