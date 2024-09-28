class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        gcds = ""
        n = min(len(str1), len(str2))

        for i in range(n):
            if str1.replace(str1[:i+1], "") == "" and str2.replace(str1[:i+1], "") == "":
                gcds = str1[:i+1]
            elif str1.replace(str2[:i+1], "") == "" and str2.replace(str2[:i+1], "") == "":
                gcds = str2[:i+1]
        return gcds
    
    def gcdOfStringsOptimized(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        
        def gcd(dividend, divisor):
            if divisor == 0:
                return dividend
            return gcd(divisor, dividend % divisor)
        
        return str1[:gcd(len(str1), len(str2))]
