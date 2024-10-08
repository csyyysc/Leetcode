class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        n = len(rooms)
        visited = set([0])

        def dfs(room):
            for key in room:
                if key in visited:
                    continue
                visited.add(key)
                dfs(rooms[key])
        
        dfs(rooms[0])

        return len(visited) == n