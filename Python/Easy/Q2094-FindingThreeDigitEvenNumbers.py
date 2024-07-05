class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        m = {}
        nums = []

        for d in digits:
            m[d] = m.get(d, 0) + 1

        for i in range(100, 1000, 2):
            _m = m.copy()
            valid = True
            for j in str(i):
                digit = int(j)
                if _m.get(digit, 0) > 0:
                    _m[digit] -= 1
                else:
                    valid = False
                    break
            if valid:
                nums.append(i)

        return nums
