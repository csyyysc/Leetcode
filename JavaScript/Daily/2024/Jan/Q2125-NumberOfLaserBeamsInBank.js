/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let beams = 0;

    let prevCameras = 0,
        curCameras = 0,
        prevRow = 0;
    for (let row = 1; row < bank.length; row++) {
        prevCameras = bank[prevRow].split("").filter((c) => c === "1").length;
        curCameras = bank[row].split("").filter((c) => c === "1").length;
        if (row > prevRow && curCameras > 0) {
            prevRow = row;
            beams += prevCameras * curCameras;
        }
    }

    return beams;
};

const numberOfBeams = (bank) =>
    bank
        .map((str) => str.split("0").join("").length)
        .filter((val) => val !== 0)
        .reduce((acc, cur, ind, arr) => acc + cur * (arr[ind + 1] || 0), 0);
