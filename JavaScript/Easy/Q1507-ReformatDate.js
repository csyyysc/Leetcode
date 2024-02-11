/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    date = date.split(" ").reverse();

    let d = "";

    const months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    };

    for (let i = 0; i < date.length; i++) {
        if (i === 0) d += date[i] + "-";
        if (i === 1) d += months[date[i]] + "-";
        if (i === 2) {
            const day = date[i].replace(/[a-z]/g, "");
            if (day.length === 1) d += "0" + day;
            else if (day.length === 2) d += day;
        }
    }

    return d;
};
