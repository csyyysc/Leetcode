class Solution {
    public:
        vector<int> productExceptSelf(vector<int>& nums) {
            vector<int> prods;
    
            int size = nums.size();
            for (int i = 0; i < size; ++i) {
                int prod = 1;
                for (int j = 0; j < size; j++) {
                    if (i == j) continue;
                    prod *= nums[j];
                }
                prods.push_back(prod);
            }
    
            return prods;
        }

        vector<int> productExceptSelfOptimized(vector<int>& nums) {
            int size = nums.size();
            vector<int> prods(size, 1);
    
            int left = 1;
            for (int i = 0; i < size; ++i) {
                prods[i] *= left;
                left *= nums[i];
            }
    
            int right = 1;
            for (int i = size - 1; i >= 0; --i) {
                prods[i] *= right;
                right *= nums[i];
            }
    
            return prods;
        }
    };

    