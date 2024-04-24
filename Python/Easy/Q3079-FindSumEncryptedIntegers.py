class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        sum = 0
        for index, val in enumerate(nums):
            digits = []
            while(val > 0):
                digits.append(val % 10)
                val = val // 10
            digits = [max(digits)] * len(digits)
            num = "".join(str(d) for d in digits)
            sum += int(num)
        return sum
    

class Solution:
    def encrypt(self, x: int) -> int:
        str_x = str(x)
        max_digit = max(str_x)
        encrypted_x = int(max_digit * len(str_x))
        return encrypted_x

    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        total_sum = 0
    
        for num in nums:
            total_sum += self.encrypt(num)
     
        return total_sum