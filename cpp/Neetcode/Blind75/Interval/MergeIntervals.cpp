class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        vector<vector<int>> ans;
        sort(intervals.begin(), intervals.end());

        for (auto &interval : intervals) {
            if (ans.empty() || ans.back()[1] < interval[0]) {
                ans.push_back(interval);
            } else {
                ans.back()[1] = max(ans.back()[1], interval[1]);
            }
        }
    
        return ans;
    }

    vector<vector<int>> mergeSweepLine(vector<vector<int>>& intervals) {
        map<int, int> m;
        for (const auto& interval : intervals) {
            ++m[interval[0]];
            --m[interval[1]];
        }

        int balance = 0;
        vector<int> interval;
        vector<vector<int>> ans;
        for (const auto& [i, cnt] : m) {
            if (interval.empty()) {
                interval.push_back(i);
            }
            balance += cnt;
            if (balance == 0) {
                interval.push_back(i);
                ans.push_back(interval);
                interval.clear();
            }
        }

        return ans;
    }
};

