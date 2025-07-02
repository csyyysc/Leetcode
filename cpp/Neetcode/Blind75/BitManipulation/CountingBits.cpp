class Solution
{
public:
    vector<int> countBits(int n)
    {
        vector<int> bits;

        for (int i = 0; i <= n; i++)
        {
            bits.push_back(this->countBit(i));
        }

        return bits;
    }

    int countBit(int n)
    {
        int count = 0;
        while (n)
        {
            n &= (n - 1);
            ++count;
        }
        return count;
    }

    vector<int> countBitsOpt(int n) {
        vector<int> bits(n + 1, 0);

        int offset = 1;
        for (int i = 1; i <= n; ++i) {
            if (offset * 2 == i) offset = i;
            bits[i] = 1 + bits[i - offset];
        }

        return bits;
    }
};
