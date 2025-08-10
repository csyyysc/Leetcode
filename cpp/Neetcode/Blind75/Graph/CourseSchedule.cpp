#include <vector>

class SolutionDFS {
public:
  bool canFinish(int numCourses, std::vector<std::vector<int>> &prerequisites) {
    std::vector<int> visited(numCourses, 0);
    std::vector<std::vector<int>> graph(numCourses);

    for (const auto &pre : prerequisites) {
      graph[pre[1]].push_back(pre[0]);
    }

    for (int i = 0; i < numCourses; ++i) {
      if (dfs(i, graph, visited))
        return false;
    }

    return true;
  }

  bool dfs(int node, std::vector<std::vector<int>> &graph,
           std::vector<int> &visited) {
    if (visited[node] == 1)
      return true;
    if (visited[node] == 2)
      return false;

    visited[node] = 1;
    for (const auto &neighbor : graph[node]) {
      if (dfs(neighbor, graph, visited))
        return true;
    }

    visited[node] = 2;
    return false;
  }
};