/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const adj = new Map();
    const visited = new Array(n).fill(Number.MAX_VALUE);
    visited[src] = 0;

    for (const [from, to, price] of flights) {
        if (!adj.has(from)) adj.set(from, []);
        adj.get(from).push([to, price]);
    }

    const queue = [[src, 0]];
    k++;

    while (k-- > 0 && queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [node, price] = queue.shift();
            if (adj.has(node)) {
                for (const [nextNode, nextPrice] of adj.get(node)) {
                    const newPrice = price + nextPrice;
                    if (newPrice < visited[nextNode]) {
                        visited[nextNode] = newPrice;
                        queue.push([nextNode, newPrice]);
                    }
                }
            }
        }
    }

    return visited[dst] === Number.MAX_VALUE ? -1 : visited[dit];
};
