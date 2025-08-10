#include <utility>
#include <vector>

class SolutionDFS {
  std::vector<std::pair<int, int>> directions = {
      {-1, 0}, {1, 0}, {0, -1}, {0, 1}};

public:
  std::vector<std::vector<int>>
  pacificAtlantic(std::vector<std::vector<int>> &heights) {
    int rows = heights.size(), cols = heights[0].size();

    std::vector<std::vector<bool>> pacific(rows,
                                           std::vector<bool>(cols, false));
    std::vector<std::vector<bool>> atlantic(rows,
                                            std::vector<bool>(cols, false));

    for (int r = 0; r < rows; ++r) {
      dfs(r, 0, heights, pacific);
      dfs(r, cols - 1, heights, atlantic);
    }

    for (int c = 0; c < cols; ++c) {
      dfs(0, c, heights, pacific);
      dfs(rows - 1, c, heights, atlantic);
    }

    std::vector<std::vector<int>> results;

    for (int r = 0; r < rows; ++r) {
      for (int c = 0; c < cols; ++c) {
        if (pacific[r][c] && atlantic[r][c]) {
          results.push_back({r, c});
        }
      }
    }

    return results;
  }

  void dfs(int r, int c, std::vector<std::vector<int>> &heights,
           std::vector<std::vector<bool>> &ocean) {
    int rows = heights.size();
    int cols = heights[0].size();

    if (ocean[r][c])
      return;

    ocean[r][c] = true;

    for (auto [dr, dc] : directions) {
      int nr = r + dr;
      int nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols) {
        if (heights[nr][nc] >= heights[r][c]) {
          dfs(nr, nc, heights, ocean);
        }
      }
    }
  }
};
