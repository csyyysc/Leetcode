class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        def dp(n, letter):
            ans = 0
            if n == len(words):
                return 0
            m = letter
            for i in words[n]:
                if i not in m:
                    return dp(n + 1, letter)
                m = m.replace(i, '', 1)
                ans += score[ord(i) - 97]
            return max(ans + dp(n + 1, m), dp(n + 1, letter))
        return dp(0, ''.join(letters))