#include <queue>
#include <unordered_map>
#include <vector>

using namespace std;

class SolutionDFS {
  unordered_map<int, int> _memo;

public:
  int coinChange(vector<int> &coins, int amount) {
    int min_coins = -1;
    dfs(coins, amount, 0, min_coins, _memo);
    return min_coins;
  }

  void dfs(vector<int> &coins, int remain_amount, int count, int &min_coins,
           unordered_map<int, int> &_memo) {
    if (remain_amount == 0) {
      if (min_coins == -1 || count < min_coins) {
        min_coins = count;
      }
      return;
    } else if (remain_amount < 0) {
      return;
    }

    if (_memo.count(remain_amount) && _memo[remain_amount] <= count) {
      return;
    }

    _memo[remain_amount] = count;

    for (int coin : coins) {
      dfs(coins, remain_amount - coin, count + 1, min_coins, _memo);
    }
  }
};

class SolutionDFSOptimized {
  unordered_map<int, int> _memo;

public:
  int coinChange(vector<int> &coins, int amount) {
    if (amount == 0)
      return 0;

    int least_coin = dfs(coins, amount);
    return least_coin == INT_MAX ? -1 : least_coin;
  }

  int dfs(vector<int> &coins, int remain) {
    if (remain < 0)
      return INT_MAX;
    if (remain == 0)
      return 0;
    if (_memo.count(remain))
      return _memo[remain];

    int min_coins = INT_MAX;
    for (int coin : coins) {
      int sub = dfs(coins, remain - coin);
      if (sub != INT_MAX) {
        min_coins = min(min_coins, sub + 1);
      }
    }

    _memo[remain] = min_coins;
    return min_coins;
  }
};

class SolutionBFS {
public:
  int coinChange(vector<int> &coins, int amount) {
    if (amount == 0)
      return 0;

    queue<int> q;
    q.push(0);

    vector<bool> seen(amount + 1, false);
    seen[0] = true;

    int min_coins = 0;
    while (!q.empty()) {
      ++min_coins;

      int size = q.size();
      for (int i = 0; i < size; ++i) {
        int current = q.front();
        q.pop();

        for (int coin : coins) {
          int next = current + coin;
          if (next == amount)
            return min_coins;
          if (next > amount || seen[next])
            continue;
          seen[next] = true;
          q.push(next);
        }
      }
    }

    return -1;
  }
};
