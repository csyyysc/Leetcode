/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let trips = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const x = Math.abs(arr[i] - arr[j]);
                const y = Math.abs(arr[j] - arr[k]);
                const z = Math.abs(arr[i] - arr[k]);

                if (x <= a && y <= b && z <= c) trips++;
            }
        }
    }

    return trips;
};
