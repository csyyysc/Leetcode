class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        n = len(arr)
        ans = []
        prefix = [0] * (n + 1)

        for i in range(1, n + 1):
            prefix[i] = prefix[i  - 1] ^ arr[i - 1]

        for left, right in queries:
            ans.append(prefix[left] ^ prefix[right + 1])

        return ans