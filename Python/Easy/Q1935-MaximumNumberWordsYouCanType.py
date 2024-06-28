class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        cnt = 0
        b = set()

        for c in brokenLetters:
            b.add(c)

        for word in text.split(" "):
            is_broke = any(c in b for c in word)
            if not is_broke:
                cnt += 1

        return cnt
