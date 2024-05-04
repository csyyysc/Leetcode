class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        m = {}
        ans = []
        n = len(boxes)
        for i in range(0, n):
            moves = 0
            for j in range(0, n):
                if i != j and boxes[j] == '1':
                    moves += abs(i - j)
            ans.append(moves)
        return ans

    """
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    def minOperations(self, boxes: str) -> List[int]:
        cur, cnt, res = 0, 0, [0] * len(boxes)

        for i, b in enumerate(boxes):
            if b == '1':
                cur += i
                cnt -= 1
        for i, b in enumerate(boxes):
            res[i] = cur
            if b == '1':
                cnt += 2
            cur += cnt
        return res