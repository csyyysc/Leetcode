class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        concat = ""
        for i in range(len(words)):
            concat += words[i]
            words[i] = concat
        return s in words