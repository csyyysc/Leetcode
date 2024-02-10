/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let position = [0, 0];
    const map = new Map();
    map.set(JSON.stringify(position), position);

    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case "E":
                position[1]++;
                break;
            case "S":
                position[0]--;
                break;
            case "W":
                position[1]--;
                break;
            case "N":
                position[0]++;
                break;
        }
        const str = JSON.stringify(position);
        if (map.get(str)) return true;
        map.set(str, position);
    }

    return false;
};
