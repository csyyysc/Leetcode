class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        m = {}
        cnt = 0

        for i in range(len(arr)):
            m[arr[i]] = m.get(arr[i], 0) + 1
            if arr[i] not in arr[i + 1 :] and m.get(arr[i]) == 1:
                cnt += 1
            if cnt == k:
                return arr[i]
        return ""

    def kthDistinct(self, arr: List[str], k: int) -> str:
        m = {}

        for c in arr:
            m[c] = m.get(c, 0) + 1

        for key, val in m.items():
            if val == 1:
                k -= 1
            if k == 0:
                return key
        return ""
