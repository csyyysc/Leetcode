import math

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [0] * n

        for i in range(0, n):
            l_nums = nums[:i]
            r_nums = nums[i+1:]

            if len(l_nums) == 0:
                ans[i] = 1 * math.prod(r_nums)
            elif len(r_nums) == 0:
                ans[i] = 1 * math.prod(l_nums)
            else:
                ans[i] = math.prod(l_nums) * math.prod(r_nums)
        return ans
    
    def productExceptSelfOptimized(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [0] * n

        l_prods = [1] * n
        for i in range(1, n):
            l_prods[i] = l_prods[i - 1] * nums[i - 1]
        
        r_prods = [1] * n
        for i in range(n - 2, -1, -1):
            r_prods[i] = r_prods[i + 1] * nums[i + 1]
        
        for i in range(n):
            ans[i] = l_prods[i] * r_prods[i]
        
        return ans

    def productExceptSelfOptimized2(self, nums: List[int]) -> List[int]:
        prefix = 1
        suffix = 1
        n = len(nums)
        ans = [0] * n

        for i in range(n):
            ans[i] = prefix
            prefix *= nums[i]

        for i in range(n - 1, -1, -1):
            ans[i] *= suffix
            suffix *= nums[i]

        return ans
 