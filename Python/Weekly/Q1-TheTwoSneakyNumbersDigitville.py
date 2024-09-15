class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        m = {}
        ans = []

        for num in nums:
            if num in m:
                ans.append(num)
            else: 
                m[num] = True
            
        return ans
        
        