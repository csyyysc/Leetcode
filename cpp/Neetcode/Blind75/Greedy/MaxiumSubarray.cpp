#include <vector>

class SolutionBruteForce {
public:
  int maxSubArray(std::vector<int> &nums) {
    int m = INT_MIN;
    int n = nums.size();
    int len = n;

    while (len > 0) {
      for (int i = 0; i < n; ++i) {
        if (i + len > n)
          continue;
        int sum = 0, start = 1, count = 0;
        while (count < len) {
          sum += nums[i + count];
          ++count;
        }
        m = std::max(m, sum);
        sum = 0;
      }
      --len;
    }

    return m;
  }
};

class SolutionKadane {
public:
  int maxSubArray(std::vector<int> &nums) {
    int m = nums[0], curSum = 0;

    for (int num : nums) {
      if (curSum < 0) {
        curSum = 0;
      }
      curSum += num;
      m = std::max(m, curSum);
    }

    return m;
  }
};
