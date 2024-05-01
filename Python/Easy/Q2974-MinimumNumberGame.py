class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        arr = []
        nums.sort(reverse=True)
        while(len(nums) > 0):
            rm1, rm2 = nums.pop(), nums.pop()
            arr.append(rm2), arr.append(rm1)
        return arr

    def numberGame(self, nums: List[int]) -> List[int]:
        nums.sort()
        arr = []

        for i in range(0, len(nums), 2):
            arr.append(nums[i + 1]), arr.append(nums[i])
        return arr