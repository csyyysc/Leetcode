/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => {
        const unitsA = 1 * a[1];
        const unitsB = 1 * b[1];

        if (unitsA > unitsB) {
            return -1;
        } else if (unitsA < unitsB) {
            return 1;
        } else {
            return 0;
        }
    });

    let max = 0;
    while (truckSize && boxTypes.length) {
        const box = boxTypes.shift();
        if (truckSize > box[0]) {
            max += box[0] * box[1];
            truckSize -= box[0];
        } else {
            max += truckSize * box[1];
            truckSize = 0;
        }
    }

    return max;
};
