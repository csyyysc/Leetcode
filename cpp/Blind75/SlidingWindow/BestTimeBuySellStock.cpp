class Solution {
    public:
        int maxProfit(vector<int>& p) {
            int prof = 0;
            int size = p.size();
            
            for (int i = 0; i < size; ++i) {
                for (int j = i + 1; j < size; ++j) {
                    prof = max(prof, p[j] - p[i]);
                }
            }
    
            return prof;
        }

        int maxProfitOpt(vector<int>& p) {
            int min_price = INT_MAX;
            int prof = 0;
    
            for (int price : p) {
                if (price < min_price) {
                    min_price = price;
                } else {
                    prof = max(prof, price - min_price);
                }
            }
           
            return prof;
        }
    };
    