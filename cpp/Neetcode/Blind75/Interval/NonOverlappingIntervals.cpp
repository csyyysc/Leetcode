class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](auto &a, auto &b) {
            return a[1] < b[1];
        });

        int ans = 0;
        int prev_e = intervals[0][1];
        for (int i = 1; i < intervals.size(); ++i) {
            int s = intervals[i][0];
            int e = intervals[i][1];

            if (s < prev_e) {
                ++ans;
            } else {
                prev_e = e;
            }
        }

        return ans;
    }

    int eraseOverlapIntervalsRecursive(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end());
        return intervals.size() - dfs(intervals, 0, -1);
    }

    int dfs(vector<vector<int>>& intervals, int i, int prev) {
        if (i == intervals.size()) return 0;

        int r = dfs(intervals, i + 1, prev);
        if (prev == -1 || intervals[prev][1] <= intervals[i][0]) {
            r = max(r, 1 + dfs(intervals, i + 1, i));
        }

        return r;
    }
};
