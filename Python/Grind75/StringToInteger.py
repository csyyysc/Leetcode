# https://leetcode.com/problems/string-to-integer-atoi/


class Solution:
    def myAtoi(self, s: str) -> int:
        # 1. Whitespace
        s = s.strip()
        i, n = 0, len(s)
        if not n:
            return 0

        first = s[0]
        if first != '+' and first != '-' and not first.isdigit():
            return 0

        # 2. Sigedness
        sign = 1
        if i < n and (s[i] == '+' or s[i] == '-'):
            sign = -1 if s[i] == '-' else 1
            i += 1

        # 3. Conversion
        figure = ''
        while i < n and s[i].isdigit():
            figure += s[i]
            i += 1

        if figure == '':
            return 0
        figure = int(figure) * sign
        figure = max(min(figure, 2 ** 31 - 1), -2 ** 31)

        return figure


if __name__ == "__main__":
    s = "42"
    print(Solution().myAtoi(s))
