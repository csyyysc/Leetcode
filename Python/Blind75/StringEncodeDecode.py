class Solution:
    def encode(self, strs: List[str]) -> str:
        secret = ""

        for s in strs:
            secret += str(len(s)) + ":" + s
        return secret

    def decode(self, s: str) -> List[str]:
        i = 0
        public = []

        while i < len(s):
            j = i
            while s[j] != ":":
                j += 1
            length = int(s[i:j])
            i = j + 1
            public.append(s[i : i + length])
            i += length
        return public
