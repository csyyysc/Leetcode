#include <map>
#include <set>
#include <vector>

class Solution {
private:
    bool dfs(int node, int parent, std::map<int, std::vector<int>>& m, std::set<int>& visited) {
        visited.insert(node);

        for (auto & ngb : m.at(node)) {
            if (ngb == parent) continue;
            if (visited.find(ngb) != visited.end()) return false;
            if(!dfs(ngb, node, m, visited)) return false;
        }
        
        return true;
    }

public:
    bool validTree(int n, std::vector<std::vector<int>>& edges) {
        if (edges.size() != n - 1) return false;
        if (n == 1 && edges.empty()) return true;

        std::map<int, std::vector<int>> m;
        for (const auto & edge : edges) {
            int f = edge[0], s = edge[1];
            m[f].push_back(s);
            m[s].push_back(f);
        }
        if (m.size() != n) return false;

        std::set<int> visited;
        if(!dfs(0, -1, m, visited)) return false;

        return visited.size() == n;
    }
};