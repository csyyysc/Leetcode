#include <vector>

class Solution {
public:
  std::vector<int> countBits(int n) {
    std::vector<int> ans(n + 1);

    for (int i = 0; i <= n; ++i) {
      ans[i] = bitCount(i);
    }

    return ans;
  }

  int bitCount(int n) {
    int count = 0;

    while (n > 0) {
      if (n % 2 == 1) {
        ++count;
      }
      n /= 2;
    }

    return count;
  }
};

class SolutionDP {
public:
  std::vector<int> countBits(int n) {
    std::vector<int> ans(n + 1, 0);

    int sub = 1;
    for (int i = 1; i <= n; ++i) {
      if (sub * 2 == i)
        sub = i;
      ans[i] = ans[i - sub] + 1;
    }

    return ans;
  }
};