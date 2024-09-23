class Solution:
    def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
        n = len(arr)

        for i in range(n - m * (k - 1)):
            cnt = 1
            for j in range(i + m, n, m):
                if arr[i:i+m] == arr[j:j+m]:
                    cnt += 1
                else:
                    break
                if cnt == k:
                    return True
        return False