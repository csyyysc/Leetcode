#include <vector>

class SolutionRecursive {
public:
  int lengthOfLIS(std::vector<int> &nums) { return dfs(0, -1, nums); }

  int dfs(int i, int prev, std::vector<int> &nums) {
    if (i == nums.size())
      return 0;

    int lis = dfs(i + 1, prev, nums); // Skip this element

    if (prev == -1 || nums[prev] < nums[i]) {
      lis = std::max(lis, 1 + dfs(i + 1, i, nums));
    }
    return lis;
  }
};

class SolutionDPTopDown {
private:
  std::vector<int> memo;

  int dfs(int i, std::vector<int> &nums) {
    if (memo[i] != -1)
      return memo[i];

    int lis = 1;
    for (int j = i + 1; j < nums.size(); ++j) {
      if (nums[i] < nums[j]) {
        lis = std::max(lis, 1 + dfs(j, nums));
      }
    }
    return memo[i] = lis;
  }

public:
  int lengthOfLIS(std::vector<int> &nums) {
    int n = nums.size();
    memo.assign(n, -1);

    int lis = 1;
    for (int i = 0; i < n; ++i) {
      lis = std::max(lis, dfs(i, nums));
    }
    return lis;
  }
};
