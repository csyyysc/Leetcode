

#include <iostream>
#include <queue>
#include <unordered_map>
#include <vector>

class Node {
public:
  int val;
  std::vector<Node *> neighbors;
  Node() {
    val = 0;
    neighbors = std::vector<Node *>();
  }
  Node(int _val) {
    val = _val;
    neighbors = std::vector<Node *>();
  }
  Node(int _val, std::vector<Node *> _neighbors) {
    val = _val;
    neighbors = _neighbors;
  }
};

class SolutionDFS {
  std::unordered_map<Node *, Node *> visited;

public:
  Node *cloneGraph(Node *node) {
    if (!node)
      return nullptr;

    if (visited.find(node) != visited.end())
      return visited[node];

    Node *clone = new Node(node->val);
    visited[node] = clone;

    for (auto neighbor : node->neighbors) {
      clone->neighbors.push_back(cloneGraph(neighbor));
    }

    return clone;
  }
};

class SolutionBFS {
public:
  Node *cloneGraph(Node *node) {
    if (!node)
      return nullptr;

    std::unordered_map<Node *, Node *> visited;
    std::queue<Node *> q;

    visited[node] = new Node(node->val);

    q.push(node);
    while (!q.empty()) {
      Node *current = q.front();
      q.pop();

      for (auto neighbor : current->neighbors) {
        if (visited.find(neighbor) == visited.end()) {
          visited[neighbor] = new Node(neighbor->val);
          q.push(neighbor);
        }

        visited[current]->neighbors.push_back(visited[neighbor]);
      }
    }

    return visited[node];
  }
}