class MyCalendar:

    def __init__(self):
        self.calendar = []

    def book(self, start: int, end: int) -> bool: 
        if (start, end) not in self.calendar:
            if len(self.calendar) == 0:
                self.calendar.append((start, end))
                return True
            else:
                for pair in self.calendar:
                    p_start, p_end = pair

                    if not (end <= p_start or start >= p_end):
                        return False
                self.calendar.append((start, end))
                return True
        else:
            return False

# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)
