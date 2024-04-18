/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    const [x, y] = coordinates.split("");
    const xCharCode = x.charCodeAt(x);
    return (xCharCode % 2 === 0 && y % 2 !== 0) || (xCharCode % 2 !== 0 && y % 2 === 0) ? true : false;
};
