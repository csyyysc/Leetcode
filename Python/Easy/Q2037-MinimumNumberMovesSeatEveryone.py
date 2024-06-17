class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats = sorted(seats)
        students = sorted(students)
        moves = 0

        for st, sdt in zip(seats, students):
            moves += abs(st - sdt)

        return moves
