class Solution:
    def oddString(self, words: List[str]) -> str:
        m1 = {}
        m2 = {}

        for word in words:
            diff = []
            for i in range(len(word) - 1):
                diff.append(ord(word[i + 1]) - ord(word[i]))
            m1[word] = diff
            m2[str(diff)] = m2.get(str(diff), 0) + 1

        target = ""
        for key, freq in m2.items():
            if freq == 1:
                target = key

        for word, diff in m1.items():
            if str(diff) == target:
                return word
