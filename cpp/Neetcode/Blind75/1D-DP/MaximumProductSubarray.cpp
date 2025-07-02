#include <climits>
#include <vector>

class Solution {
public:
  int maxProduct(std::vector<int> &nums) {
    int max_prod = INT_MIN;

    dfs(1, max_prod, nums);

    return max_prod;
  }

  void dfs(int len, int &max_prod, std::vector<int> &nums) {
    int n = nums.size();
    if (len > n)
      return;

    for (int i = 0; i <= n - len; ++i) {
      int prod = 1;
      for (int j = i; j < i + len; ++j) {
        prod *= nums[j];
      }
      max_prod = std::max(max_prod, prod);
    }

    dfs(len + 1, max_prod, nums);
  }
};

class SolutionKadane {
public:
  int maxProduct(std::vector<int> &nums) {
    int max_prod = nums[0];
    int cur_min = 1, cur_max = 1;

    for (int num : nums) {
      int val = cur_max * num;
      cur_max = std::max(num, std::max(num * cur_max, num * cur_min));
      cur_min = std::min(num, std::min(val, num * cur_min));
      max_prod = std::max(max_prod, cur_max);
    }
    return max_prod;
  }
};