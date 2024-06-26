class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        C = []
        n = len(A)

        for i in range(n):
            cnt = 0
            for j in range(i + 1):
                if B[j] in A[: i + 1]:
                    cnt += 1
            C.append(cnt)
            cnt = 0
        return C

    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        mem = set()
        ans = [0] * len(A)

        for i in range(len(A)):
            mem.add(A[i])
            mem.add(B[i])

            ans[i] = (i + 1) * 2 - len(mem)
        return ans
