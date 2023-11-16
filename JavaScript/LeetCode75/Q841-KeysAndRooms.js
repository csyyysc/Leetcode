/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visitedRoomsCount = 0;
    const totalRooms = rooms.length;
    const visitedRooms = Array(totalRooms);

    function dfs(idx) {
        visitedRooms[idx] = true;
        visitedRoomsCount++;
        return rooms[idx].some(idx => !visitedRooms && dfs(idx));
    }
    dfs(0);
    
    return visitedRoomsCount === totalRooms;
}