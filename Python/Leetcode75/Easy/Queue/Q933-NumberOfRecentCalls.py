class RecentCounter:

    def __init__(self):
        self.queue = []

    def ping(self, t: int) -> int:
        self.queue.append(t)

        calls = 0
        for call in self.queue:
            last_call = self.queue[-1]

            if last_call - 3000 <= call <= last_call:
                calls += 1
        return calls
    
    def pingOptimized(self, t: int) -> int:
        self.queue.append(t)

        while True:
            last_call = self.queue[-1]
            if last_call - 3000 > self.queue[0]:
                self.queue.pop(0)
            else:
                break
        return len(self.queue)


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
