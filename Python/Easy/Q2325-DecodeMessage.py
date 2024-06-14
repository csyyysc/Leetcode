class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        key = key.replace(" ", "")
        j = 0
        m = {}
        for i, c in enumerate(key):
            if c not in m:
                m[c] = chr(j + ord('a'))
                j += 1
        return "".join(m[c] if c in m else c for c in message)