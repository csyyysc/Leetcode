/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let results = [];

    const n = releaseTimes.length;
    const map = {};
    map[keysPressed[0]] = releaseTimes[0];

    for (let i = 1; i < n; i++) {
        const val = map[keysPressed[i]];
        const duration = releaseTimes[i] - releaseTimes[i - 1];
        if (!val) map[keysPressed[i]] = duration;
        else if (duration > val) map[keysPressed[i]] = duration;
    }

    const max = Math.max(...Object.values(map));

    for (const key in map) {
        if (map[key] === max) results.push(key);
    }

    results.sort();
    return results[results.length - 1];
};
