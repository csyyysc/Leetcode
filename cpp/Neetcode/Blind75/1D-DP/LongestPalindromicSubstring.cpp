class Solution {
public:
  string longestPalindromeBruteForce(string s) {
    string lps = "";
    int size = s.size();

    for (int i = 0; i < size; ++i) {
      for (int j = i + 1; j <= size; ++j) {
        string sub = s.substr(i, j - i);
        if (isPalindrome(sub) && sub.size() > lps.size()) {
          lps = sub;
        }
      }
    }
    return lps;
  }

  string longestPalindromeDP(string s) {
    int n = s.size();
    int start = 0, maxLen = 1;

    vector<vector<bool>> dp(n, vector<bool>(n, false));

    for (int i = 0; i < n; ++i) {
      dp[i][i] = true;
    }

    for (int len = 2; len <= n; ++len) {
      for (int l = 0; l <= n - len; ++l) {
        int r = l + len - 1;

        if ((s[l] == s[r]) && (len == 2 || dp[l + 1][r - 1])) {
          dp[l][r] = true;

          if (len > maxLen) {
            maxLen = len;
            start = l;
          }
        }
      }
    }

    return s.substr(start, maxLen);
  }

  bool isPalindrome(string s) {
    for (int i = 0; i < s.size() / 2; ++i) {
      if (s[i] != s[s.size() - 1 - i])
        return false;
    }
    return true;
  }
};
