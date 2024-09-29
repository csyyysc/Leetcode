class Solution:
    def kthCharacter(self, k: int) -> str:
        word = "a"

        while len(word) < k:
            for i in range(len(word)):
                if ord(word[i]) == ord(word[i]) + 26:
                    word += "a"
                else:
                    word += chr(ord(word[i]) + 1)
        return word[k - 1]
