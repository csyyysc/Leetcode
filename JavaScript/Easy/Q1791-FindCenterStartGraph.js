/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    const map = {};

    for (const con of edges) {
        const [n1, n2] = con;
        map[n1] = (map[n1] || 0) + 1;
        map[n2] = (map[n2] || 0) + 1;
    }

    const max = Math.max(...Object.values(map));

    for (const key in map) {
        if (map[key] === max) return key;
    }
};

const findCenter = (edges) => {
    const map = {};

    for (const edge of edges) {
        const [n1, n2] = edge;
        if (map[n1]) return n1;
        else map[n1] = true;
        if (map[n2]) return n2;
        else map[n2] = true;
    }
};
