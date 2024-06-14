class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        cnt = 0
        n = len(arr)

        for i in range(n):
            xor = arr[i]
            for k in range(i+1, n):
                xor ^= arr[k]
                if xor == 0:
                    cnt += k - i

        return cnt