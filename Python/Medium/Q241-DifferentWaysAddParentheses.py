class Solution:
    def diffWaysToCompute(self, exp: str) -> List[int]:
        if exp.isdigit():
           return [int(exp)]
        
        ans = []

        for i in range(len(exp)):
            if exp[i] in "+-*":
                left = self.diffWaysToCompute(exp[:i])
                right = self.diffWaysToCompute(exp[i+1:])
                for l in left:
                    for r in right:
                        if exp[i] == '+':
                            ans.append(l + r)
                        elif exp[i] == '-':
                            ans.append(l - r)
                        elif exp[i] == '*':
                            ans.append(l * r)
        return ans