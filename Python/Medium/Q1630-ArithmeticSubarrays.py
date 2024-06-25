class Solution:
    def checkArithmeticSubarrays(
        self, nums: List[int], l: List[int], r: List[int]
    ) -> List[bool]:
        m = len(l)
        validation = [None for _ in range(m)]

        for i in range(m):
            sub = nums[l[i] : r[i] + 1]
            if self.is_arithmetic(sub):
                validation[i] = True

        return validation

    def is_arithmetic(self, arr):
        n = len(arr)

        if n == 1 or n == 2:
            return True

        arr = sorted(arr)
        diff = arr[1] - arr[0]
        for i in range(1, n - 1):
            if (arr[i] - arr[i - 1]) != (arr[i + 1] - arr[i]):
                return False
        return True
