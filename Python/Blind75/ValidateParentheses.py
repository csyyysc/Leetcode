class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        m = {")": "(", "}": "{", "]": "["}

        for c in s:
            if c in m.values():
                stack.append(c)
            elif c in m.keys():
                if len(stack) == 0 or stack[-1] != m[c]:
                    return False
                else:
                    stack.pop()
        return len(stack) == 0
