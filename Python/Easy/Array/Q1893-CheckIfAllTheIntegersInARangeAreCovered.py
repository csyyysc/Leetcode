class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        check_list = [False] * (right - left + 1) 
        for num in range(left, right + 1):
            for pair in ranges:
                start, end = pair
                if start <= num <= end:
                    check_list[num - left] = True
        return all(check_list)