class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        arr1, arr2 = [], []
        for num in nums:
            if len(arr1) == 0:
                arr1.append(num)
            elif len(arr2) == 0:
                arr2.append(num)
            else:
                if arr1[-1] > arr2[-1]:
                    arr1.append(num)
                else:
                    arr2.append(num)
        return arr1 + arr2

    def resultArray(self, nums: List[int]) -> List[int]:
        arr1, arr2 = [nums[0]], [nums[1]]
        for i in range(2, len(nums)):
            if arr1[-1] > arr2[-1]:
                arr1.append(nums[i])
            else:
                arr2.append(nums[i])
        return arr1 + arr2
