/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(matrix) {
    let circles = 0;
    const visited = new Set();

    for(let i = 0; i < matrix.length; i++) {
        if(!visited.has(i)) {
            dfs(i);
            circles++;
        }
    }

    function dfs(i) {
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[i][j] === 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    }

    return circles;
}