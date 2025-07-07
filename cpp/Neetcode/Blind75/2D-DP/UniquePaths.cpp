#include <set>
#include <string>
#include <vector>

class SolutionDFS {
public:
  int uniquePaths(int m, int n) {
    std::set<std::string> visited;

    dfs(0, 0, "", m, n, visited);
    return visited.size();
  }

  void dfs(int row, int col, std::string route, int m, int n,
           std::set<std::string> &visited) {
    if (row >= m || col >= n)
      return;

    if (row == m - 1 && col == n - 1) {
      visited.insert(route);
      return;
    }

    dfs(row + 1, col, route + "D", m, n, visited);
    dfs(row, col + 1, route + "R", m, n, visited);
  }
};

class SolutionDP {
public:
  int uniquePaths(int m, int n) {
    std::vector<std::vector<int>> dp(m, std::vector<int>(n, 1));

    for (int i = 1; i < m; ++i) {
      for (int j = 1; j < n; ++j) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }

    return dp[m - 1][n - 1];
  }
};
