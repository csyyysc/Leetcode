#include <string>
#include <unordered_map>
#include <vector>

class SolutionRecursive {
public:
  int dfs(int i, std::string &s) {
    int ch = s[i];
    int size = s.size();

    if (ch == '0')
      return 0;
    if (i == size)
      return 1;

    int cnt = dfs(i + 1, s);
    if (i < size - 1) {
      if (ch == '1' || (ch == '2' && s[i + 1] < '7')) {
        cnt += dfs(i + 2, s);
      }
    }

    return cnt;
  }

  int numDecodings(std::string s) { return dfs(0, s); }
};

class SolutionRecursiveMemo {
  std::unordered_map<int, int> memo;

public:
  int dfs(int i, std::string &s) {
    int ch = s[i];
    int size = s.size();

    if (ch == '0')
      return 0;
    if (i == size)
      return 1;
    if (memo.count(i))
      return memo[i];

    int cnt = dfs(i + 1, s);
    if (i < size - 1) {
      int ch_num = stoi(s.substr(i, 2));
      if (ch_num <= 26) {
        cnt += dfs(i + 2, s);
      }
    }

    return memo[i] = cnt;
  }

  int numDecodings(std::string s) { return dfs(0, s); }
};

class SolutionBottomUp {
public:
  int numDecodings(std::string s) {
    int n = s.size();
    std::vector<int> dp(n + 1, 0);

    dp[n] = 1;
    for (int i = n - 1; i >= 0; --i) {
      char ch = s[i];
      if (ch == '0')
        dp[i] = 0;
      else {
        dp[i] = dp[i + 1];

        if (i + 1 < n) {
          int ch_num = stoi(s.substr(i, 2));
          if (ch_num <= 26) {
            dp[i] += dp[i + 2];
          }
        }
      }
    }

    return dp[0];
  }
};
