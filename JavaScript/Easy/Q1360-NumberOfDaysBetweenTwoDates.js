/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    const DAY = 24 * 60 * 60 * 1000;
    const d1 = new Date(date1);
    const d2 = new Date(datqe2);

    return d1 > d2 ? (d1 - d2) / DAY : (d2 - d1) / DAY;
};

const daysBetweenDates = (d1, d2) => {
    const mills = 1000 * 60 * 60 * 24;
    return Math.abs((new Date(d1).getTime() - new Date(d2).getTime()) / mills);
};
