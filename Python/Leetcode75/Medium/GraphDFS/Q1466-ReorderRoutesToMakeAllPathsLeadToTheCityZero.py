class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        ords = 0
        visited = set()
        graph = {i: [] for i in range(n)}

        for u, v in connections:
            graph[u].append((v, 1))
            graph[v].append((u, 0))
        
        def dfs(city):
            nonlocal ords
            for neighbor, direction in graph[city]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    if direction:
                        ords += 1
                    dfs(neighbor)
        dfs(0)

        return ords