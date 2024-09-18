class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        arr = sorted(list(map(str, nums)), key = lambda x: x * 10, reverse=True)

        if arr[0] == '0':
            return '0'

        return ''.join(arr)