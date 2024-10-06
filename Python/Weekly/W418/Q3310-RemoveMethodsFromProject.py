class Solution:
    def remainingMethods(self, n: int, k: int, invocations: List[List[int]]) -> List[int]:
        graph = {i: [] for i in range(n)}
        for src, dst in invocations:
            graph[src].append(dst)
        
        sus = [k]
        visited = set([k])

        while sus:
            print(sus)
            infected = sus.pop()
            for new in graph[infected]:
                if new not in visited:
                    visited.add(new)
                    sus.append(new)

        if len(visited) == n:
            return []
        
        methods = []
        for parent in graph.keys():
            if parent in visited:
                continue
            for child in graph[parent]:
                if child in visited:
                    return [i for i in range(n)]
            methods.append(parent)
            
        return methods
