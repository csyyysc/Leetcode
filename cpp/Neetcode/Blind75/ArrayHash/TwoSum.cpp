class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            int size = nums.size();
            vector<int> pivos(2);
            for (int i = 0; i < size; ++i) {
                for (int j = i + 1; j < size; ++j) {
                    if (nums[i] + nums[j] == target) {
                        pivos[0] = i;
                        pivos[1] = j;
                        return pivos;
                    }
                }
            }
        }

        vector<int> twoSumOpt(vector<int>& nums, int target) {
            std::map<int, int> m;
    
            for (int i = 0; i < nums.size(); ++i) {
                int com = target - nums[i];
                if (m.find(com) != m.end()) {
                    return {m[com], i};
                }
    
                m[nums[i]] = i;
            }
        }
    };
    