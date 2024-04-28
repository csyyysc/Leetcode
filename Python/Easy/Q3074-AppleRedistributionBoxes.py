class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        boxes = 0
        apples = reduce(lambda x, y: x + y, apple)
        while apples > 0:
            apples -= max(capacity)
            capacity.remove(max(capacity))
            boxes += 1
        return boxes