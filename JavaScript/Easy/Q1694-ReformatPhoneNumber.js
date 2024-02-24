/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    number = number.replaceAll(" ", "").replaceAll("-", "");

    let phone = "";
    while (number.length > 0) {
        const len = number.length;
        const mod = len % 3;
        if (len > 4) {
            phone += number.substring(0, 3) + "-";
            number = number.substring(3, len);
        } else if (mod === 1) {
            phone += number.substring(0, 2) + "-";
            number = number.substring(2, len);
        } else {
            phone += number.substring(0, len);
            number = "";
        }
    }

    return phone;
};
