class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        cnt = 0
        n = len(word)
        vowels = set("aeiou")

        for start in range(n):
            if word[start] in vowels:
                current_vowels = set()
                for end in range(start, n):
                    if word[end] in vowels:
                        current_vowels.add(word[end])
                        if current_vowels == vowels:
                            cnt += 1
                else:
                    break

        return cnt
