#include <cstdint>
#include <string>

class Solution {
public:
  uint32_t reverseBits(uint32_t n) {
    int len = 32;
    std::string rev_bits = "";

    while (n > 0) {
      if (n % 2 == 1) {
        rev_bits += "1";
      } else {
        rev_bits += "0";
      }
      n /= 2;
    }

    if (rev_bits.size() < len) {
      int diff = len - rev_bits.size();
      for (int i = 0; i < diff; ++i) {
        rev_bits = rev_bits + "0";
      }
    }

    return static_cast<uint32_t>(std::stoul(rev_bits, nullptr, 2));
  }
};

class SolutionOptimized {
public:
  uint32_t reverseBits(uint32_t n) {
    uint32_t ans = 0;

    for (int i = 0; i < 32; ++i) {
      ans <<= 1;
      ans |= (n & 1);
      n >>= 1;
    }

    return ans;
  }
};