#include <vector>

class SolutionDFS {
public:
  bool canJump(std::vector<int> &nums) {
    std::vector<int> memo(nums.size(), -1);

    return dfs(0, nums, memo);
  }

  bool dfs(int index, std::vector<int> &nums, std::vector<int> &memo) {
    if (index >= nums.size() - 1)
      return true;
    if (memo[index] != -1)
      return memo[index];

    int maxJump = std::min((int)nums.size() - 1, index + nums[index]);

    for (int next = index + 1; next <= maxJump; ++next) {
      if (dfs(next, nums, memo)) {
        memo[index] = 1;
        return true;
      }
    }

    return false;
  }
};

class SolutionGreedy {
public:
  bool canJump(std::vector<int> &nums) {
    int maxReach = 0;

    for (int i = 0; i < nums.size(); ++i) {
      if (i > maxReach)
        return false;

      maxReach = std::max(maxReach, i + nums[i]);
      if (maxReach == nums.size() - 1)
        return true;
    }

    return false;
  }
}