/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    const sum = distance.reduce((sum, cur) => sum + cur, 0);

    let clockwise = 0;
    if (start < destination) {
        clockwise = distance.slice(start, destination).reduce((sum, cur) => sum + cur, 0);
    } else {
        clockwise = distance.slice(destination, start).reduce((sum, cur) => sum + cur, 0);
    }

    return Math.min(clockwise, sum - clockwise);
};
