class Solution
{
public:
    int getSum(int a, int b)
    {
        bitset<32> a_bits(a);
        bitset<32> b_bits(b);
        bitset<32> c_bits;
        
        int carry = 0;
        for (int i = 0; i < 32; ++i) {
            int a_bit = a_bits[i];
            int b_bit = b_bits[i];
            
            c_bits[i] = a_bit ^ b_bit ^ carry;
            carry = (a_bit & b_bit) | (carry & (a_bit ^ b_bit));
        }

        return (int)(c_bits.to_ulong());
    }

    int getSumOpt(int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1;
            a ^= b;
            b = carry;
        }
        return a;
    }
};
