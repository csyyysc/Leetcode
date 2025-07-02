class Solution {
public:
  int hammingWeight(int n) {
    int count = 0;

    while (n > 0) {
      if (n % 2 == 1)
        ++count;
      n /= 2;
    }

    return count;
  }
};

class SolutionBitOperation {
public:
  int hammingWeight(int n) {
    int count = 0;

    for (int i = 0; i < 32; ++i) {
      if ((n >> i) & 1)
        ++count;
    }

    return count;
  }
};

class SolutionHamming {
public:
  int hammingWeight(int n) {
    int count = 0;

    while (n != 0) {
      n = (n & (n - 1));
      ++count;
    }

    return count;
  }
};