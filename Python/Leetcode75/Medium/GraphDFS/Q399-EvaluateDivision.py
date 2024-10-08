class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        evals = []
        graph = {}

        for (u, v), val in zip(equations, values):
            if u not in graph:
                graph[u] = []
            if v not in graph:
                graph[v] = []
            graph[u].append((v, val))
            graph[v].append((u, 1 / val))

        def dfs(start, end, visited):
            if start not in graph or end not in graph:
                return -1.0
            if start == end:
                return 1.0

            visited.add(start)

            for neighbor, val in graph[start]:
                if neighbor in visited:
                    continue
                ans = dfs(neighbor, end, visited)
                if ans != -1.0:
                    return ans * val
                
            return -1

        for u, v in queries:
            if u not in graph or v not in graph:
                evals.append(-1.0)
            elif u == v:
                evals.append(1.0)    
            else:
                evals.append(dfs(u, v, set()))

        return evals