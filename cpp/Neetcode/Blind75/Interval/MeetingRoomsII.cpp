/**
 * Definition of Interval:
 * class Interval {
 * public:
 *     int start, end;
 *     Interval(int start, int end) {
 *         this->start = start;
 *         this->end = end;
 *     }
 * }
 */

class Solution {
public:
    int minMeetingRooms(vector<Interval>& intervals) {
        vector<int> starts;
        vector<int> ends;

        for (const auto& interval : intervals) {
            starts.push_back(interval.start);
            ends.push_back(interval.end);
        }
        sort(starts.begin(), starts.end());
        sort(ends.begin(), ends.end());

        int s = 0, e = 0;
        int ans = 0, cnt = 0;
        while (s < intervals.size()) {
            if (starts[s] < ends[e]) {
                ++s;
                ++cnt;
            } else {
                ++e;
                --cnt;
            }
            ans = max(ans, cnt);
        }

        return ans;
    }

    int minMeetingRoomsSweepLine(vector<Interval>& intervals) {
        map<int, int> m;
        for(auto& i : intervals) {
            ++m[i.start];
            --m[i.end];
        }

        int prev = 0, ans = 0;
        for (auto& [key, val] : m) {
            prev += val;
            ans = max(ans, prev);
        }
        return ans;
    }

    int minMeetingRoomsMinHeap(vector<Interval>& intervals) {
        sort(intervals.begin(), intervals.end(), [](auto& a, auto& b) {
            return a.start < b.start;
        });

        priority_queue<int, vector<int>, greater<int>> minHeap;
        for (const auto& i: intervals) {
            if (!minHeap.empty() && minHeap.top() <= i.start) {
                minHeap.pop();
            } 
            minHeap.push(i.end);
        }
        return minHeap.size();
    }
};
