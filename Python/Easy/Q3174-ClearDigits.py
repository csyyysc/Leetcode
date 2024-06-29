class Solution:
    def clearDigits(self, s: str) -> str:
        word = []

        for c in s:
            if "0" <= c <= "9":
                word.pop()
            else:
                word.append(c)
        return "".join(word)
