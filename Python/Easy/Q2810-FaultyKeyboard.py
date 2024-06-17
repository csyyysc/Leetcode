class Solution:
    def finalString(self, s: str) -> str:
        faulty = ""

        for c in s:
            if c != "i":
                faulty += c
            else:
                faulty = faulty[::-1]
        return faulty
