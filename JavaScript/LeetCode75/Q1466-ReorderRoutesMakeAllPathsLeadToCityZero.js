/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let count = 0;
    const graph = [];
    const set = new Set();

    for(let i = 0; i < n; i++) graph[i] = [];

    for(const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
        set.add(`${u}#${v}`);
    }

    function dfs(node, parent) {
        if(set.has(`${parent}#${node}`)) count++;
        for(const nei of graph[node]) {
            if(nei === parent) continue;
            dfs(nei, node);
        }
    }
    dfs(0, -1);

    return count;
}

const minReorder = (n, connections) => {
    let i = 0;
    let routes = 0;
    let stack = [connections[0]];
    const map = {};

    while(stack.length) {
        const city = stack[stack.length - 1];
        const a = city[0];
        const b = city[1];
        i++;

        if((a === 0 || map[a]) && (b !== 0 || !map[b])) {
            map[b] = true;
            routes++;
            stack.pop();
        } else if (b === 0 || map[b]) {
            map[a] = true;
            stack.pop();
        } else if (i >= connections.length) {
            for(let j = 0; j < stack.length; j++) {
                let c = stack[j];
                if(map[c[0]] || map[c[1]]) {
                    stack[stack.length - 1] = c;
                    stack[j] = city;
                    break;
                }
            }
        }
        if(i < connections.length) stack.push(connections[i]);
    }
    return routes;
}