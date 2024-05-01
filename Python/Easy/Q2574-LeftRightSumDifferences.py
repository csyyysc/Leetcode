class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n = len(nums)

        if n <= 1:
            return [0]
        elif n == 2:
            return [nums[-1], nums[0]]
        else:
            left = [0]
            right = [0]
            for i in range(0, n - 1):
                left.append(left[i] + nums[i])
                right.insert(0, right[0] + nums[n - 1 - i])
            return [abs(l - r) for l, r in zip(left, right)]
        
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n = len(nums)
        s = sum(nums)
        cum = 0
        arr = []

        for i in range(0, n):
            s -= nums[i]
            arr.append(abs(cum - s))
            cum += nums[i]
        return arr