/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    const map = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    };

    const date = new Date(year, month - 1, day);
    return map[date.getDay()];
};

function dayOfTheWeek(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", { weekday: "long" });
}
