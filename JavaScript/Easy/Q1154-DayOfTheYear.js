/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const normal = {
        0: 31,
        1: 28,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        12: 31,
    };
    const leap = {
        0: 31,
        1: 29,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        12: 31,
    };

    date = date.split("-");

    let days = 0;
    for (let i = 0; i < +date[1] - 1; i++) {
        if (date[0] % 100 === 0 && date[0] % 400 === 0) {
            days += leap[i];
        } else if (date[0] % 4 === 0 && date[0] % 100 !== 0) {
            days += leap[i];
        } else {
            days += normal[i];
        }
    }
    days += +date[2];

    return days;
};

const dayOfYear = (date) => (new Date(date) - new Date(date.slice(0, 4)) + 86400000) / 86400000;
