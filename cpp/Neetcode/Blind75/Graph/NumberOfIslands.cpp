#include <queue>
#include <vector>

class SolutionDFS {
public:
  int numberIslands(std::vector<std::vector<char>> &grid) {
    int islands = 0;

    int row = grid.size();
    int col = grid[0].size();

    for (int r = 0; r < row; ++r) {
      for (int c = 0; c < col; ++c) {
        if (grid[r][c] == '1') {
          dfs(r, c, grid);
          ++islands;
        }
      }
    }

    return islands;
  }

  void dfs(int r, int c, std::vector<std::vector<char>> &grid) {
    if (r < 0 || c < 0 || r >= grid.size() || c >= grid[0].size() ||
        grid[r][c] == '0')
      return;

    grid[r][c] = '0';
    dfs(r + 1, c, grid);
    dfs(r - 1, c, grid);
    dfs(r, c + 1, grid);
    dfs(r, c - 1, grid);
  }
};

class SolutionBFS {
  int directions[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

public:
  int numIslands(std::vector<std::vector<char>> &grid) {
    int islands = 0;

    int rows = grid.size();
    int cols = grid[0].size();
    for (int r = 0; r < rows; ++r) {
      for (int c = 0; c < cols; ++c) {
        if (grid[r][c] == '1') {
          bfs(r, c, grid);
          ++islands;
        }
      }
    }

    return islands;
  }

  void bfs(int r, int c, std::vector<std::vector<char>> &grid) {
    std::queue<std::pair<int, int>> q;

    grid[r][c] = '0';

    q.push(std::make_pair(r, c));

    while (!q.empty()) {
      auto [row, col] = q.front();
      q.pop();

      for (int i = 0; i < 4; ++i) {
        int nr = row + directions[i][0];
        int nc = col + directions[i][1];

        if (nr >= 0 && nc >= 0 && nr < grid.size() && nc < grid[0].size() &&
            grid[nr][nc] == '1') {
          q.push(std::make_pair(nr, nc));
          grid[nr][nc] = '0';
        }
      }
    }
  }
};
