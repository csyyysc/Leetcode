#include <string>

class Solution {
public:
  bool hasAlternatingBits(int n) {
    std::string bits = "";

    while (n != 0) {
      if (n % 2 == 0)
        bits += "0";
      else
        bits += "1";

      n /= 2;
    }

    for (int i = 0; i < bits.size() - 1; ++i) {
      if (bits[i] == bits[i + 1])
        return false;
    }
    return true;
  }
};

class SolutionBitOperation {
public:
  bool hasAlternatingBits(int n) {
    int prev = n & 1;

    n >>= 1;
    while (n > 0) {
      int curr = n & 1;
      if (curr == prev)
        return false;
      else
        prev = curr;
      n >>= 1;
    }

    return true;
  }
};