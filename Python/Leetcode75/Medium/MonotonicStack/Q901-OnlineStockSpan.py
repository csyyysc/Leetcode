class StockSpanner:

    def __init__(self):
        self.stack = []

    def next(self, price: int) -> int:
        if not self.stack or (self.stack[-1][0] > price):
            self.stack.append((price, 1))
            return 1

        span = 0
        while self.stack and (self.stack[-1][0] <= price):
            span += self.stack.pop()[1]
        
        self.stack.append((price, span))

        return span