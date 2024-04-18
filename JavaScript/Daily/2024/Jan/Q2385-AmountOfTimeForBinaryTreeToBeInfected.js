/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    let min = 0;

    function traverse(root, start) {
        if (!root) return 0;

        const left = traverse(root.left, start);
        const right = traverse(root.right, start);

        if (root.val === start) {
            min = Math.max(left, right);
            return -1;
        } else if (left >= 0 && right >= 0) {
            return Math.max(left, right) + 1;
        } else {
            min = Math.max(min, Math.abs(left - right));
            return Math.min(left, right) - 1;
        }
    }
    traverse(root, start);

    return min;
};

function amountOfTime(root, start) {
    const graph = new Graph(root);
    return graph.maxDistanceFrom(start);
}

class Graph {
    constructor(root) {
        this.adj = {};
        this.init(root);
    }

    init(root) {
        if (!root) return;

        if (!this.adj[root.val]) this.adj[root.val] = [];

        if (root.left?.val) {
            this.adj[root.val].push(root.left.val);
            if (!this.adj[root.left.val]) this.adj[root.left.val] = [];
            this.adj[root.left.val].push(root.val);
        }

        if (root.right?.val) {
            this.adj[root.val].push(root.right.val);
            if (!this.adj[root.right.val]) this.adj[root.right.val] = [];
            this.adj[root.right.val].push(root.val);
        }

        this.init(root.left);
        this.init(root.right);
    }

    maxDistanceFrom(start) {
        const visited = new Set();
        return this.traverse(start, 0, visited);
    }

    traverse(start, depth, visited) {
        if (!this.adj[start]) return depth;
        if (visited.has(start)) return depth;

        visited.add(start);

        let max = depth;
        for (const point of this.adj[start]) {
            if (!visited.has(point)) max = Math.max(max, this.traverse(point, depth + 1, visited));
        }

        return max;
    }
}
