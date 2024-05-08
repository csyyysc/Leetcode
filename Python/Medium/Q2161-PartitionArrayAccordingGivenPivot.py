class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        l_arr, r_arr = [], []

        for num in nums:
            if num < pivot:
                l_arr.append(num)
            else:
                r_arr.append(num)
        return l_arr + [num for num in r_arr if num == pivot] + [num for num in r_arr if num != pivot]

    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        l_arr, p_arr, r_arr = [], [], []

        for num in nums:
            if num < pivot:
                l_arr.append(num)
            elif num == pivot:
                p_arr.append(num)
            else:
                r_arr.append(num)
        return l_arr + p_arr + r_arr