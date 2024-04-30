class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        return max([len(w.split(" ")) for w in sentences])