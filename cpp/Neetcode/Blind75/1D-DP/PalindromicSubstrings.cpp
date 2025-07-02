class Solution {
public:
  int countSubstrings(string s) {
    int n = s.size();
    int count = 0, start = 0, maxLen = 1;
    vector<vector<bool>> dp(n, vector<bool>(n, false));

    for (int i = 0; i < n; ++i) {
      dp[i][i] = true;
      ++count;
    }

    for (int len = 2; len <= n; ++len) {
      for (int l = 0; l <= n - len; ++l) {
        int r = l + len - 1;

        if ((s[l] == s[r]) && (len == 2 || dp[l + 1][r - 1])) {
          dp[l][r] = true;
          count++;

          if (len > maxLen) {
            maxLen = len;
            start = l;
          }
        }
      }
    }

    return count;
  }
};
