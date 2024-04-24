/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    for (let i = 0; i < paths.length; i++) {
        const [_, end] = paths[i];
        if (paths.find((el) => el[0] === end) === undefined) return end;
    }
};

const destCity = (paths) => {
    const graph = new Map();

    for (const [start, end] of paths) {
        if (!graph.has(start)) graph.set(start, 0);
        if (!graph.has(end)) graph.set(end, 0);
        graph.set(start, graph.get(start) + 1);
    }

    for (const [key, val] of graph) {
        if (!val) return key;
    }
};
