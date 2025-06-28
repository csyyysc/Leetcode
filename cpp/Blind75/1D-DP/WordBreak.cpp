#include <string>
#include <unordered_map>
#include <vector>

class SolutionDFS {
  std::unordered_map<int, bool> memo;

public:
  bool wordBreak(std::string s, std::vector<std::string> &wordDict) {
    return dfs(0, s, wordDict);
  }

  bool dfs(int start, std::string s, std::vector<std::string> &wordDict) {
    if (start == s.size())
      return true;
    if (memo.count(start))
      return memo[start];

    for (const std::string &word : wordDict) {
      int len = word.length();
      if (start + len <= s.size() && s.substr(start, len) == word) {
        if (dfs(start + len, s, wordDict)) {
          return memo[start] = true;
        }
      }
    }

    return memo[start] = false;
  }
};

class SolutionBottomUp {
public:
  bool wordBreak(std::string s, std::vector<std::string> &wordDict) {
    int n = s.size();
    std::vector<bool> dp(n + 1, false);

    dp[n] = true;
    for (int i = n - 1; i >= 0; --i) {
      for (const auto &w : wordDict) {
        int wn = w.size();
        if ((i + wn) <= n && s.substr(i, wn) == w) {
          dp[i] = dp[i + wn];
        }

        if (dp[i])
          break;
      }
    }

    return dp[0];
  }
};
