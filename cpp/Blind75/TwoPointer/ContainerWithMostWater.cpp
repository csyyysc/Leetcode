class Solution {
    public:
        int maxArea(vector<int>& h) {
            int mw = 0;
    
            int size = h.size();
            for (int i = 0; i < size; ++i) {
                for (int j = i + 1; j < size; ++j) {
                    int wd = j - i;
                    int ht = min(h[i], h[j]);
                    mw = max(mw, wd * ht);
                }
            }
    
            return mw;
        }

        int maxAreaOpt(vector<int>& h) {
            int mw = 0;
            int size = h.size();
    
            int l = 0;
            int r = size - 1;
            while(l < r) {
                mw = max(mw, (r - l) * min(h[l], h[r]));
                if (h[l] < h[r]) {
                    ++l;
                } else {
                    --r;
                }
            }

            return mw;
        }
    };
    