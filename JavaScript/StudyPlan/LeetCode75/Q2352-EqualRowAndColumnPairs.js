

const equalPairs = (grid) => {
    const rows = grid.map(arr => arr.join())
    const columns = grid[0].map((_, i) => grid.map(row => row[i]).join())

    let count = 0
    for (const row of rows) {
        for (const column of columns) {
            if (row === column) count++
        }
    }
    return count;
};

function equalPairs (grid) {
    let count = 0;
    const n = grid.length;
    const rows = new Map();

    for(let r = 0; r < n; r++) {
        const row = JSON.stringify(grid[r]);
        rows.set(row, 1 + (rows.get(row) || 0));
    }

    for(let c = 0; c < n; c++) {
        const col = JSON.stringify(grid.map(row => row[c]));
        count += (rows.get(col) || 0);
    }

    return count;
}